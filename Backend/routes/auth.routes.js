const express = require("express");
const router  = express.Router();
const { requireAuth, syncUser } = require("../middleware/auth.middleware");
const { getMe, updateMe, syncUserProfile } = require("../controllers/auth.controller");

router.post("/sync", requireAuth, syncUser, syncUserProfile); // POST /api/auth/sync
router.get("/me",    requireAuth, syncUser, getMe);           // GET  /api/auth/me
router.put("/me",    requireAuth, syncUser, updateMe);        // PUT  /api/auth/me

module.exports = router;