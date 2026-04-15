import express    from "express";
import User        from "../models/user.js";
import Course      from "../models/course.js";
import Enrollment  from "../models/enrollment.js";
import { requireAuth }  from "../middleware/auth.middleware.js";
import { isAdmin }      from "../middleware/admin.middleware.js";
import { ROLE_PERMISSIONS } from "../models/user.js";

const router = express.Router();
router.use(requireAuth, isAdmin);

// ── GET /api/admin/dashboard ──────────────────────────────────────────────────
router.get("/dashboard", async (req, res) => {
  try {
    const [totalUsers, totalCourses, totalEnrollments] = await Promise.all([
      User.countDocuments(),
      Course.countDocuments(),
      Enrollment.countDocuments(),
    ]);
    res.json({ success: true, stats: { totalUsers, totalCourses, totalEnrollments } });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats", error: error.message });
  }
});

// ── GET /api/admin/users ──────────────────────────────────────────────────────
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
});

// ── PUT /api/admin/users/:id/role ─────────────────────────────────────────────
router.put("/users/:id/role", async (req, res) => {
  try {
    const { role } = req.body;
    if (!["student", "instructor", "admin"].includes(role))
      return res.status(400).json({ message: "Invalid role" });

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role        = role;
    user.permissions = ROLE_PERMISSIONS[role];
    await user.save();

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: "Error updating role", error: error.message });
  }
});

// ── DELETE /api/admin/users/:id ───────────────────────────────────────────────
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
});

// ── GET /api/admin/courses ────────────────────────────────────────────────────
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email").lean();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error: error.message });
  }
});

// ── PUT /api/admin/courses/:id/publish ────────────────────────────────────────
router.put("/courses/:id/publish", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    course.isPublished = !course.isPublished;
    await course.save();
    res.json({ success: true, isPublished: course.isPublished });
  } catch (error) {
    res.status(500).json({ message: "Error toggling publish", error: error.message });
  }
});

// ── GET /api/admin/enrollments ────────────────────────────────────────────────
router.get("/enrollments", async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("user",   "name email")
      .populate("course", "title")
      .lean();
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments", error: error.message });
  }
});

export default router;
