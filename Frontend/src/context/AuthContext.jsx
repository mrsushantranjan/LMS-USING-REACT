import React, { createContext, useState, useEffect } from "react";
import { authAPI } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // UI States for Auth Modal
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState("login"); // "login" or "register"

  const isSignedIn = !!user;

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("lms_token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { user } = await authAPI.getMe();
        setUser(user);
      } catch (err) {
        console.error("Token verification failed:", err);
        localStorage.removeItem("lms_token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      const data = await authAPI.login({ email, password });
      if (data.token) {
        localStorage.setItem("lms_token", data.token);
        setUser(data.user);
        setAuthModalOpen(false);
        return { success: true, user: data.user };
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message;
      setError(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const register = async (name, email, password, adminSecret) => {
    try {
      setError(null);
      const data = await authAPI.register({ name, email, password, adminSecret });
      if (data.token) {
        localStorage.setItem("lms_token", data.token);
        setUser(data.user);
        setAuthModalOpen(false);
        return { success: true, user: data.user };
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message;
      setError(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const logout = () => {
    localStorage.removeItem("lms_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isSignedIn,
        login,
        register,
        logout,
        authModalOpen,
        setAuthModalOpen,
        authView,
        setAuthView,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
