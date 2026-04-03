const express = require("express");
const router  = express.Router();
const { requireAuth, syncUser } = require("../middleware/auth.middleware");
const {
  enrollFree, getMyEnrollments, checkEnrollment,
} = require("../controllers/enrollment.controller");

router.post("/free",        requireAuth, syncUser, enrollFree);        // POST /api/enrollment/free
router.get("/my",           requireAuth, syncUser, getMyEnrollments);  // GET  /api/enrollment/my
router.get("/check/:id",    requireAuth, syncUser, checkEnrollment);   // GET  /api/enrollment/check/:courseId

module.exports = router;