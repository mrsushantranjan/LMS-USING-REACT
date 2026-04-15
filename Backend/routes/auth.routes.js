import express from "express";
import User            from "../models/user.js";
import { requireAuth, generateToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// ── POST /api/auth/register ───────────────────────────────────────────────────
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, adminSecret } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "name, email and password are required" });

    let role = "student";
    if (adminSecret === "LMS_ADMIN_2026") {
      role = "admin";
    }

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Email already registered" });

    const user  = await User.create({ name, email, password, role });
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar },
    });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
});

// ── POST /api/auth/login ──────────────────────────────────────────────────────
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "email and password are required" });

    // Explicitly select password (it's select:false in schema)
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const match = await user.comparePassword(password);
    if (!match)
      return res.status(401).json({ message: "Invalid email or password" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account deactivated" });

    const token = generateToken(user._id);

    res.json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
});

// ── GET /api/auth/me ──────────────────────────────────────────────────────────
router.get("/me", requireAuth, (req, res) => {
  res.json({ success: true, user: req.user });
});

// ── PUT /api/auth/me ──────────────────────────────────────────────────────────
router.put("/me", requireAuth, async (req, res) => {
  try {
    const allowed = ["name", "avatar", "bio", "phone"];
    const updates = {};
    allowed.forEach((field) => {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    });

    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true });
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
});

// ── PUT /api/auth/change-password ─────────────────────────────────────────────
router.put("/change-password", requireAuth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword)
      return res.status(400).json({ message: "currentPassword and newPassword are required" });

    const user = await User.findById(req.user._id).select("+password");
    const match = await user.comparePassword(currentPassword);
    if (!match)
      return res.status(401).json({ message: "Current password is incorrect" });

    user.password = newPassword;
    await user.save(); // triggers pre-save hash

    res.json({ success: true, message: "Password updated" });
  } catch (error) {
    res.status(500).json({ message: "Password change failed", error: error.message });
  }
});

export default router;
