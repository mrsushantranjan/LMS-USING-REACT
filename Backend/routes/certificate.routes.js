const express = require("express");
const router  = express.Router();
const { requireAuth, syncUser } = require("../middleware/auth.middleware");
const { generateCertificate, getMyCertificates, getCertificateById } = require("../controllers/certificate.controller");

router.post("/generate/:courseId", requireAuth, syncUser, generateCertificate);
router.get("/my",                  requireAuth, syncUser, getMyCertificates);
router.get("/:id",                 requireAuth, syncUser, getCertificateById);

module.exports = router;
