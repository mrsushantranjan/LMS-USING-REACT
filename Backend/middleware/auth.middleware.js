import jwt  from "jsonwebtoken";
import User from "../models/user.js";

// ─── REQUIRE AUTH ─────────────────────────────────────────────────────────────
export const requireAuth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token   = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    if (!user.isActive) {
      return res.status(403).json({ success: false, message: "Account deactivated" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

// ─── OPTIONAL AUTH ────────────────────────────────────────────────────────────
// Attaches user if token present — does NOT block unauthenticated requests
export const withAuth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
      const token   = header.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId);
    }
  } catch {
    // ignore invalid tokens on optional routes
  }
  next();
};

// ─── GENERATE TOKEN ───────────────────────────────────────────────────────────
export const generateToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
