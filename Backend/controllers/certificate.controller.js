const Certificate = require("../models/certificate");
const Enrollment  = require("../models/Enrollment");
const Course      = require("../models/course");

// Generate unique certificate number
const generateCertNumber = () => {
  const year   = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `LMS-${year}-${random}`;
};

// POST /api/certificate/generate/:courseId
const generateCertificate = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Check enrollment and completion
    const enrollment = await Enrollment.findOne({
      user:   req.user._id,
      course: courseId,
    });

    if (!enrollment) {
      return res.status(404).json({ success: false, message: "You are not enrolled in this course" });
    }

    if (!enrollment.isCompleted) {
      return res.status(400).json({
        success: false,
        message: `Course not completed yet. Progress: ${enrollment.progressPercent}%`,
      });
    }

    // Check if certificate already exists
    const existing = await Certificate.findOne({ user: req.user._id, course: courseId });
    if (existing) {
      return res.status(200).json({ success: true, message: "Certificate already issued", certificate: existing });
    }

    const course = await Course.findById(courseId);

    // Create certificate
    const certificate = await Certificate.create({
      user:              req.user._id,
      course:            courseId,
      enrollment:        enrollment._id,
      certificateNumber: generateCertNumber(),
      issuedAt:          new Date(),
    });

    // Update enrollment
    await Enrollment.findByIdAndUpdate(enrollment._id, {
      certificateIssued: true,
      certificateId:     certificate._id,
    });

    res.status(201).json({
      success:     true,
      message:     "🎉 Certificate generated successfully!",
      certificate: await certificate.populate([
        { path: "user",   select: "name email" },
        { path: "course", select: "title instructor" },
      ]),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/certificate/my
const getMyCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({ user: req.user._id })
      .populate("course", "title thumbnail category")
      .sort({ issuedAt: -1 });

    res.status(200).json({ success: true, total: certificates.length, certificates });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/certificate/:id
const getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id)
      .populate("user",   "name email")
      .populate("course", "title instructor category");

    if (!certificate) {
      return res.status(404).json({ success: false, message: "Certificate not found" });
    }

    res.status(200).json({ success: true, certificate });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { generateCertificate, getMyCertificates, getCertificateById };