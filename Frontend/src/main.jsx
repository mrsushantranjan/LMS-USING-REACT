import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";
import "./index.css";

// ✅ Your Clerk publishable key
const PUBLISHABLE_KEY = "pk_live_Y2xlcmsubXJzdXNoYW50cmFuamFuLmdpdGh1Yi5pbyQ";

// ✅ Safety check (prevents silent crash)
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}

        // 🔥 IMPORTANT: Force correct Clerk script (fixes your error)
        clerkJSUrl="https://cdn.jsdelivr.net/npm/@clerk/clerk-js@5/dist/clerk.browser.js"

        afterSignOutUrl="/"
      >
        <App />
      </ClerkProvider>
    </HashRouter>
  </React.StrictMode>
);