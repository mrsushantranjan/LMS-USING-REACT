import express    from "express";
import Enrollment  from "../models/enrollment.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

// ── GET /api/enrollments/my ───────────────────────────────────────────────────
router.get("/my", requireAuth, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id })
      .populate("course")
      .lean();
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments", error: error.message });
  }
});

export default router;
