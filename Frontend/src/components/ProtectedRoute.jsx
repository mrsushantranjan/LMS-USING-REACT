import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Loader } from "lucide-react";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, loading, isSignedIn } = useAuth();

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Loader className="animate-spin" size={48} color="#0ea5e9" />
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  if (requireAdmin && user?.role !== "admin") {
    // If not admin, restrict access completely
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
