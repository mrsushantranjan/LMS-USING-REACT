const express = require("express");
const router  = express.Router();
const { requireAuth, syncUser } = require("../middleware/auth.middleware");
const {
  getProgress, markChapterComplete, markChapterIncomplete,
} = require("../controllers/progress.controller");

router.get("/:courseId",             requireAuth, syncUser, getProgress);
router.post("/:courseId/complete",   requireAuth, syncUser, markChapterComplete);
router.post("/:courseId/incomplete", requireAuth, syncUser, markChapterIncomplete);

module.exports = router;