import { Routes, Route } from "react-router-dom";
import { useEffect }     from "react";
import "./index.css";
import useAuth from "./hooks/useAuth";

import Home                   from "./pages/Home";
import Navbar                 from "./components/Navbar";
import AuthModal              from "./components/AuthModal";
import Footer                 from "./components/Footer";
import CourseDetailedPageHome from "./components/CourseDetailedPageHome";
import CourseDetail           from "./components/CourseDetailedPage";
import AboutUsSections        from "./components/AboutUsPage";
import FacultyPage            from "./components/Faculty";
import ContactPage            from "./components/ContactPage";
import PaymentPage            from "./components/PagePayment";
import ProtectedRoute         from "./components/ProtectedRoute";
import AdminDashboard         from "./pages/AdminDashboard";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  const { dbUser } = useAuth();
  useEffect(() => {
    if (dbUser) console.log("✅ User synced:", dbUser.name);
  }, [dbUser]);

  return (
    <>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/courses"     element={<Layout><CourseDetailedPageHome /></Layout>} />
        <Route path="/courses/:id" element={<Layout><CourseDetail /></Layout>} />
        <Route path="/payment/:id" element={<Layout><PaymentPage /></Layout>} />
        <Route path="/about"       element={<Layout><AboutUsSections /></Layout>} />
        <Route path="/faculty"     element={<Layout><FacultyPage /></Layout>} />
        <Route path="/contact"     element={<Layout><ContactPage /></Layout>} />
        
        {/* Protected Admin Routing */}
        <Route path="/admin/*"     element={<ProtectedRoute requireAdmin={true}><AdminDashboard /></ProtectedRoute>} />
        
        <Route path="*"            element={
          <Layout>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"80vh", gap:16, textAlign:"center", padding:"0 24px" }}>
              <div style={{ fontSize:"5rem", fontWeight:700, color:"#e2e8f0" }}>404</div>
              <div style={{ fontSize:"1.4rem", fontWeight:600, color:"#0c1a2e" }}>Page not found</div>
              <a href="/" style={{ marginTop:8, padding:"11px 26px", borderRadius:"100px", background:"#0e7490", color:"#fff", textDecoration:"none", fontSize:"0.88rem", fontWeight:500 }}>Back to Home</a>
            </div>
          </Layout>
        } />
      </Routes>
      <AuthModal />
    </>
  );
}

export default App;