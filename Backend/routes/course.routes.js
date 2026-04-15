import express from "express";
import Course     from "../models/course.js";
import Enrollment from "../models/enrollment.js";
import User       from "../models/user.js";
import { requireAuth, withAuth } from "../middleware/auth.middleware.js";
import { isInstructor }          from "../middleware/admin.middleware.js";

const router = express.Router();

// ── GET /api/courses ──────────────────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const { search, category, level, sort } = req.query;
    const filter = {};

    if (search) {
      filter.$or = [
        { title:       { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (category) filter.category = { $regex: category, $options: "i" };
    if (level)    filter.level    = level;

    let sortOption = { totalStudents: -1 };
    if (sort === "newest")     sortOption = { createdAt: -1 };
    if (sort === "rating")     sortOption = { rating: -1 };
    if (sort === "price-low")  sortOption = { "price.original": 1 };
    if (sort === "price-high") sortOption = { "price.original": -1 };

    const courses = await Course.find(filter).sort(sortOption).lean();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error: error.message });
  }
});

// ── GET /api/courses/:id ──────────────────────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).lean();
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error: error.message });
  }
});

// ── POST /api/courses — instructor/admin only ─────────────────────────────────
router.post("/", requireAuth, isInstructor, async (req, res) => {
  try {
    const course = await Course.create({ ...req.body, instructor: req.user._id });
    res.status(201).json({ success: true, course });
  } catch (error) {
    res.status(500).json({ message: "Error creating course", error: error.message });
  }
});

// ── PUT /api/courses/:id ──────────────────────────────────────────────────────
router.put("/:id", requireAuth, isInstructor, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json({ success: true, course });
  } catch (error) {
    res.status(500).json({ message: "Error updating course", error: error.message });
  }
});

// ── POST /api/courses/:id/enroll ──────────────────────────────────────────────
router.post("/:id/enroll", requireAuth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const userId   = req.user._id;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const existing = await Enrollment.findOne({ user: userId, course: courseId });
    if (existing)
      return res.status(200).json({ success: true, message: "Already enrolled", enrollment: existing });

    const enrollment = await Enrollment.create({ user: userId, course: courseId });
    await Course.findByIdAndUpdate(courseId, { $inc: { totalStudents: 1 } });
    await User.findByIdAndUpdate(userId, { $addToSet: { enrollments: courseId } });

    console.log(`✅ ${req.user.email} enrolled in "${course.title}"`);
    res.status(201).json({ success: true, message: "Enrolled successfully", enrollment });
  } catch (error) {
    res.status(500).json({ message: "Error enrolling", error: error.message });
  }
});

// ── GET /api/courses/:id/enrollment-status ────────────────────────────────────
router.get("/:id/enrollment-status", withAuth, async (req, res) => {
  try {
    if (!req.user) return res.json({ isEnrolled: false });

    const enrollment = await Enrollment.findOne({ user: req.user._id, course: req.params.id });
    res.json({ isEnrolled: !!enrollment, enrollment });
  } catch (error) {
    res.status(500).json({ message: "Error checking enrollment", error: error.message });
  }
});

export default router;
