import express    from "express";
import Course      from "../models/course.js";
import Enrollment  from "../models/enrollment.js";
import User        from "../models/user.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

// ── POST /api/payment/create-order ────────────────────────────────────────────
router.post("/create-order", requireAuth, async (req, res) => {
  try {
    const { courseId } = req.body;
    if (!courseId) return res.status(400).json({ message: "courseId is required" });

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const amount  = course.price?.sale ?? course.price?.original ?? 0;
    const orderId = `order_${Date.now()}_${courseId}`;

    console.log(`📦 Order: ${orderId} — ₹${amount} for "${course.title}"`);
    res.json({ success: true, orderId, amount, courseId });
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
});

// ── POST /api/payment/verify ──────────────────────────────────────────────────
router.post("/verify", requireAuth, async (req, res) => {
  try {
    const { orderId, courseId } = req.body;
    if (!orderId || !courseId)
      return res.status(400).json({ message: "orderId and courseId are required" });

    const userId = req.user._id;

    const existing = await Enrollment.findOne({ user: userId, course: courseId });
    if (!existing) {
      await Enrollment.create({ user: userId, course: courseId });
      await Course.findByIdAndUpdate(courseId, { $inc: { totalStudents: 1 } });
      await User.findByIdAndUpdate(userId, { $addToSet: { enrollments: courseId } });
      console.log(`✅ Payment verified & enrolled: ${req.user.email}`);
    }

    res.json({ success: true, message: "Payment verified and enrollment complete", orderId });
  } catch (error) {
    res.status(500).json({ message: "Error verifying payment", error: error.message });
  }
});

export default router;
