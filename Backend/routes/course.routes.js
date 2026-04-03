const express = require("express");
const router  = express.Router();
const { requireAuth, syncUser } = require("../middleware/auth.middleware");
const { isAdmin, isInstructor } = require("../middleware/admin.middleware");
const {
  getAllCourses, getCourseById,
  createCourse, updateCourse, deleteCourse, rateCourse,
} = require("../controllers/course.controller");

// ── PUBLIC routes (no auth needed) ───────────────────────────────────────────
router.get("/",          getAllCourses);
router.get("/:id",       getCourseById);

// ── PROTECTED routes (auth required) ─────────────────────────────────────────
router.post("/",         requireAuth, syncUser, isInstructor, createCourse);
router.put("/:id",       requireAuth, syncUser, isInstructor, updateCourse);
router.delete("/:id",    requireAuth, syncUser, isAdmin,      deleteCourse);
router.post("/:id/rate", requireAuth, syncUser,               rateCourse);

module.exports = router;
