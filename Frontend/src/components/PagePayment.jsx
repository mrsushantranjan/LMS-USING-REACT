import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CheckCircle, Lock, CreditCard, ArrowLeft, BookOpen, Shield } from "lucide-react";

// ✅ FIX 1: Use correct port 8000
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const getToken = async () => {
  return localStorage.getItem("lms_token");
};

const PaymentPage = () => {
  const { id }        = useParams();
  const navigate      = useNavigate();
  const { isSignedIn, user } = useAuth();

  const [course,    setCourse]    = useState(null);
  const [loading,   setLoading]   = useState(true);
  const [paying,    setPaying]    = useState(false);
  const [paid,      setPaid]      = useState(false);
  const [error,     setError]     = useState(null);
  const [cardData,  setCardData]  = useState({
    name: "", number: "", expiry: "", cvv: "",
  });

  // Fetch course details
  useEffect(() => {
    if (!isSignedIn) { navigate("/"); return; }
    const load = async () => {
      try {
        const res  = await fetch(`${API_URL}/courses/${id}`);
        const data = await res.json();
        // ✅ FIX 2: Backend returns course directly, not data.course
        setCourse(data);
      } catch {
        setError("Failed to load course.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, isSignedIn]);

  const handleInput = (e) => {
    let { name, value } = e.target;
    if (name === "number") value = value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    if (name === "expiry") value = value.replace(/\D/g, "").slice(0, 4).replace(/^(.{2})(.+)/, "$1/$2");
    if (name === "cvv")    value = value.replace(/\D/g, "").slice(0, 3);
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handlePay = async (e) => {
    e.preventDefault();
    if (!cardData.name || cardData.number.replace(/\s/g, "").length < 16 || !cardData.expiry || cardData.cvv.length < 3) {
      setError("Please fill all card details correctly."); return;
    }
    setError(null);
    setPaying(true);
    try {
      const token = await getToken();

      // Step 1 — Create order
      const orderRes = await fetch(`${API_URL}/payment/create-order`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body:    JSON.stringify({ courseId: id }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.message);

      // Step 2 — Verify payment
      const verifyRes = await fetch(`${API_URL}/payment/verify`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body:    JSON.stringify({
          orderId:  orderData.orderId,
          courseId: id,
          amount:   orderData.amount,
          // ✅ Send clerkId so backend can auto-enroll after payment
          clerkId:  user?.id,
        }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyRes.ok) throw new Error(verifyData.message);

      setPaid(true);
      setTimeout(() => navigate(`/courses/${id}`), 3000);
    } catch (err) {
      setError(err.message || "Payment failed. Please try again.");
    } finally {
      setPaying(false);
    }
  };

  if (loading) return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#f0f9ff", fontFamily:"DM Sans, sans-serif" }}>
      <p style={{ color:"#94a3b8" }}>Loading...</p>
    </div>
  );

  if (error && !course) return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#f0f9ff", fontFamily:"DM Sans, sans-serif", gap:12 }}>
      <p style={{ color:"#ef4444" }}>{error}</p>
      <button onClick={() => navigate(-1)} style={{ padding:"10px 22px", background:"#0e7490", color:"#fff", border:"none", borderRadius:"100px", cursor:"pointer" }}>Go Back</button>
    </div>
  );

  const price = course?.price?.sale || course?.price?.original || 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--cyan:#0e7490;--cyan-dark:#0a5c73;--border:rgba(14,116,144,0.15);--bg:#f0f9ff;--white:#fff;--ff-d:'Cormorant Garamond',serif;--ff-b:'DM Sans',sans-serif}
        .pay-page{min-height:100vh;background:var(--bg);font-family:var(--ff-b);display:flex;align-items:center;justify-content:center;padding:24px}
        .pay-wrap{width:100%;max-width:900px;display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start}
        @media(max-width:700px){.pay-wrap{grid-template-columns:1fr}}
        .pay-left{background:var(--white);border:1px solid var(--border);border-radius:18px;overflow:hidden;box-shadow:0 4px 24px rgba(14,116,144,0.08)}
        .pay-course-img{width:100%;height:180px;object-fit:cover;display:block;background:#e2e8f0}
        .pay-course-body{padding:22px}
        .pay-course-cat{font-size:.68rem;font-weight:500;color:var(--cyan);text-transform:uppercase;letter-spacing:.09em;margin-bottom:6px}
        .pay-course-title{font-family:var(--ff-d);font-size:1.3rem;font-weight:700;color:#0c1a2e;line-height:1.2;margin-bottom:10px}
        .pay-course-desc{font-size:.82rem;color:#64748b;font-weight:300;line-height:1.6;margin-bottom:18px}
        .pay-divider{height:1px;background:var(--border);margin-bottom:18px}
        .pay-price-row{display:flex;align-items:center;justify-content:space-between}
        .pay-price-label{font-size:.8rem;color:#64748b;font-weight:300}
        .pay-price-val{font-family:var(--ff-d);font-size:2rem;font-weight:700;color:var(--cyan);letter-spacing:-.02em}
        .pay-incl{font-size:.72rem;color:#94a3b8;margin-top:4px;display:flex;align-items:center;gap:5px}
        .pay-right{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:28px;box-shadow:0 4px 24px rgba(14,116,144,0.08)}
        .pay-back{display:inline-flex;align-items:center;gap:6px;font-size:.78rem;color:#94a3b8;cursor:pointer;background:none;border:none;font-family:var(--ff-b);margin-bottom:20px;transition:color .2s}
        .pay-back:hover{color:var(--cyan)}
        .pay-form-title{font-family:var(--ff-d);font-size:1.4rem;font-weight:700;color:#0c1a2e;margin-bottom:4px}
        .pay-form-sub{font-size:.8rem;color:#94a3b8;font-weight:300;margin-bottom:24px;display:flex;align-items:center;gap:5px}
        .pay-field{margin-bottom:16px}
        .pay-label{display:block;font-size:.75rem;font-weight:500;color:#334155;margin-bottom:6px;letter-spacing:.01em}
        .pay-input{width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:10px;font-family:var(--ff-b);font-size:.875rem;font-weight:300;color:#0f172a;background:#f8fafc;outline:none;transition:border-color .2s,box-shadow .2s}
        .pay-input::placeholder{color:#cbd5e1}
        .pay-input:focus{border-color:var(--cyan);background:var(--white);box-shadow:0 0 0 3px rgba(14,116,144,.1)}
        .pay-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .pay-error{padding:10px 14px;background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.2);border-radius:8px;font-size:.78rem;color:#ef4444;margin-bottom:14px}
        .pay-btn{width:100%;padding:14px;border-radius:100px;border:none;font-family:var(--ff-b);font-size:.9rem;font-weight:500;color:#fff;cursor:pointer;background:linear-gradient(135deg,#0a5c73,#0e7490);box-shadow:0 4px 18px rgba(14,116,144,.3);transition:all .22s;display:flex;align-items:center;justify-content:center;gap:8px;margin-top:4px}
        .pay-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 28px rgba(14,116,144,.4)}
        .pay-btn:disabled{opacity:.6;cursor:not-allowed}
        .pay-secure{display:flex;align-items:center;justify-content:center;gap:6px;font-size:.72rem;color:#94a3b8;margin-top:12px;font-weight:300}
        .pay-spinner{width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}
        .pay-success{text-align:center;padding:40px 20px}
        .pay-success-icon{width:70px;height:70px;background:rgba(15,118,110,.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px}
        .pay-success-title{font-family:var(--ff-d);font-size:1.6rem;font-weight:700;color:#0c1a2e;margin-bottom:8px}
        .pay-success-sub{font-size:.85rem;color:#64748b;font-weight:300;line-height:1.6}
        .pay-success-bar{width:100%;height:4px;background:#e2e8f0;border-radius:100px;margin-top:24px;overflow:hidden}
        .pay-success-fill{height:100%;background:linear-gradient(90deg,#0e7490,#06b6d4);border-radius:100px;animation:fillBar 3s linear forwards}
        @keyframes fillBar{from{width:0}to{width:100%}}
      `}</style>

      <div className="pay-page">
        {paid ? (
          <div style={{ background:"var(--white)", borderRadius:18, padding:40, maxWidth:440, width:"100%", boxShadow:"0 4px 24px rgba(14,116,144,.08)", textAlign:"center" }}>
            <div className="pay-success">
              <div className="pay-success-icon">
                <CheckCircle size={36} color="#0f766e" />
              </div>
              <div className="pay-success-title">Payment Successful! 🎉</div>
              <div className="pay-success-sub">
                You're now enrolled in <strong>{course?.title}</strong>.<br/>
                Redirecting to your course...
              </div>
              <div className="pay-success-bar">
                <div className="pay-success-fill" />
              </div>
            </div>
          </div>
        ) : (
          <div className="pay-wrap">
            {/* Left — Course Summary */}
            <div className="pay-left">
              <img
                src={course?.thumbnail || `https://picsum.photos/seed/${id}/600/300`}
                alt={course?.title}
                className="pay-course-img"
              />
              <div className="pay-course-body">
                <div className="pay-course-cat">{course?.category}</div>
                <div className="pay-course-title">{course?.title}</div>
                <div className="pay-course-desc">
                  {course?.description?.slice(0, 120)}{course?.description?.length > 120 ? "..." : ""}
                </div>
                <div className="pay-divider" />
                <div className="pay-price-row">
                  <div>
                    <div className="pay-price-label">Total Amount</div>
                    <div className="pay-incl"><BookOpen size={12}/> Lifetime access included</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div className="pay-price-val">₹{price}</div>
                    {course?.price?.original && course?.price?.sale && (
                      <div style={{ fontSize:".75rem", color:"#94a3b8", textDecoration:"line-through" }}>₹{course.price.original}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Payment Form */}
            <div className="pay-right">
              <button className="pay-back" onClick={() => navigate(-1)}>
                <ArrowLeft size={14}/> Back
              </button>
              <div className="pay-form-title">Complete Payment</div>
              <div className="pay-form-sub">
                <Lock size={12}/> Secure & encrypted payment
              </div>

              <form onSubmit={handlePay} noValidate>
                <div className="pay-field">
                  <label className="pay-label">Cardholder Name</label>
                  <input className="pay-input" name="name" value={cardData.name}
                    onChange={handleInput} placeholder="Name on card" />
                </div>
                <div className="pay-field">
                  <label className="pay-label">Card Number</label>
                  <input className="pay-input" name="number" value={cardData.number}
                    onChange={handleInput} placeholder="1234 5678 9012 3456" maxLength={19} />
                </div>
                <div className="pay-row">
                  <div className="pay-field">
                    <label className="pay-label">Expiry Date</label>
                    <input className="pay-input" name="expiry" value={cardData.expiry}
                      onChange={handleInput} placeholder="MM/YY" maxLength={5} />
                  </div>
                  <div className="pay-field">
                    <label className="pay-label">CVV</label>
                    <input className="pay-input" name="cvv" value={cardData.cvv}
                      onChange={handleInput} placeholder="123" maxLength={3} type="password" />
                  </div>
                </div>

                {error && <div className="pay-error">{error}</div>}

                <button type="submit" className="pay-btn" disabled={paying}>
                  {paying
                    ? <><div className="pay-spinner"/> Processing...</>
                    : <><CreditCard size={16}/> Pay ₹{price} Now</>
                  }
                </button>
                <div className="pay-secure">
                  <Shield size={12}/> 256-bit SSL encrypted · Safe & secure
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentPage;