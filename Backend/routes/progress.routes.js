import express    from "express";
import Enrollment  from "../models/enrollment.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

// ── PUT /api/progress/:courseId ───────────────────────────────────────────────
router.put("/:courseId", requireAuth, async (req, res) => {
  try {
    const { progress } = req.body;
    if (progress === undefined)
      return res.status(400).json({ message: "progress is required" });

    const enrollment = await Enrollment.findOneAndUpdate(
      { user: req.user._id, course: req.params.courseId },
      { progress: Math.min(100, Math.max(0, progress)) },
      { new: true }
    );

    if (!enrollment)
      return res.status(404).json({ message: "Enrollment not found" });

    res.json({ success: true, enrollment });
  } catch (error) {
    res.status(500).json({ message: "Error updating progress", error: error.message });
  }
});

// ── GET /api/progress/:courseId ───────────────────────────────────────────────
router.get("/:courseId", requireAuth, async (req, res) => {
  try {
    const enrollment = await Enrollment.findOne({
      user:   req.user._id,
      course: req.params.courseId,
    }).lean();

    if (!enrollment)
      return res.status(404).json({ message: "Enrollment not found" });

    res.json({ success: true, progress: enrollment.progress });
  } catch (error) {
    res.status(500).json({ message: "Error fetching progress", error: error.message });
  }
});

export default router;
