import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { X, Shield } from "lucide-react";

const AuthModal = () => {
  const { authModalOpen, setAuthModalOpen, authView, setAuthView, login, register, error } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!authModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res;
    if (authView === "login") {
      res = await login(email, password);
    } else {
      res = await register(name, email, password, isAdminMode ? adminSecret : undefined);
    }
    setLoading(false);
    
    if (res?.success && res?.user?.role === "admin") {
      setTimeout(() => navigate("/admin"), 100);
    }
  };

  return (
    <>
      <style>{`
        .auth-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }

        .auth-modal-content {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          width: 90%;
          max-width: 420px;
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          padding: 2rem;
          transform: translateY(0);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .auth-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(241, 245, 249, 0.8);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
        }
        
        .auth-close:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .auth-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .auth-subtitle {
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .auth-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .auth-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          margin-left: 0.2rem;
        }

        .auth-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          background: rgba(255, 255, 255, 0.8);
          outline: none;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .auth-input:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }

        .auth-submit {
          margin-top: 1rem;
          padding: 0.85rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #0284c7, #0ea5e9);
          color: white;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.2s;
        }

        .auth-submit:hover {
          box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3);
          transform: translateY(-1px);
        }

        .auth-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .auth-toggle {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
          color: #64748b;
        }

        .auth-toggle span {
          color: #0284c7;
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.3rem;
        }

        .auth-toggle span:hover {
          text-decoration: underline;
        }

        .auth-error {
          background: #fef2f2;
          color: #ef4444;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1rem;
          border: 1px solid #fecaca;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
      <div className="auth-modal-overlay" onClick={() => setAuthModalOpen(false)}>
        <div className="auth-modal-content" onClick={e => e.stopPropagation()}>
          <button className="auth-close" onClick={() => setAuthModalOpen(false)}>
            <X size={18} />
          </button>

          <h2 className="auth-title">
            {authView === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="auth-subtitle">
            {authView === "login" 
              ? "Enter your details to access your learning journey." 
              : "Sign up to start learning today."}
          </p>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            {authView === "register" && (
              <div className="auth-input-group">
                <label className="auth-label">Full Name</label>
                <input 
                  type="text" 
                  className="auth-input" 
                  placeholder="John Doe"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required 
                />
              </div>
            )}
            
            {authView === "register" && isAdminMode && (
              <div className="auth-input-group">
                <label className="auth-label" style={{ color: "#0ea5e9" }}><Shield size={12} style={{display:"inline", marginRight: "4px"}}/>Admin Secret Code</label>
                <input 
                  type="password" 
                  className="auth-input" 
                  placeholder="Enter Secret Code"
                  value={adminSecret}
                  onChange={e => setAdminSecret(e.target.value)}
                  style={{ borderColor: "#0ea5e9", boxShadow: "0 0 0 1px rgba(14, 165, 233, 0.2)" }}
                  required={isAdminMode}
                />
              </div>
            )}
            <div className="auth-input-group">
              <label className="auth-label">Email Address</label>
              <input 
                type="email" 
                className="auth-input" 
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="auth-input-group">
              <label className="auth-label">Password</label>
              <input 
                type="password" 
                className="auth-input" 
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? "Processing..." : (authView === "login" ? "Sign In" : "Sign Up")}
            </button>
          </form>

          <div className="auth-toggle">
            {authView === "login" ? (
              <>Don't have an account? <span onClick={() => setAuthView("register")}>Sign Up</span></>
            ) : (
              <>Already have an account? <span onClick={() => setAuthView("login")}>Sign In</span></>
            )}
          </div>
          
          {authView === "register" && (
            <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.8rem", color: "#94a3b8" }}>
              <span 
                style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px", transition: "color 0.2s" }} 
                onClick={() => setIsAdminMode(!isAdminMode)}
                onMouseOver={(e) => e.target.style.color = "#0ea5e9"}
                onMouseOut={(e) => e.target.style.color = "#94a3b8"}
              >
                <Shield size={12} /> {isAdminMode ? "Register as Student instead" : "Register as Admin"}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthModal;
