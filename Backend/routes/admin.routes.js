const express = require("express");
const router  = express.Router();
const { requireAuth, syncUser } = require("../middleware/auth.middleware");
const { isAdmin } = require("../middleware/admin.middleware");
const {
  getDashboardStats, getAllUsers, updateUserRole, deleteUser,
  getAllCourses, toggleCoursePublish, getAllOrders, getAllEnrollments,
} = require("../controllers/admin.controller");

router.use(requireAuth, syncUser, isAdmin);

router.get("/dashboard",           getDashboardStats);
router.get("/users",               getAllUsers);
router.put("/users/:id/role",      updateUserRole);
router.delete("/users/:id",        deleteUser);
router.get("/courses",             getAllCourses);
router.put("/courses/:id/publish", toggleCoursePublish);
router.get("/orders",              getAllOrders);
router.get("/enrollments",         getAllEnrollments);

module.exports = router;
