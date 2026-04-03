const Enrollment = require("../models/enrollment");
const Course     = require("../models/course");
const Progress   = require("../models/progress");

// POST /api/enrollment/free — enroll in a free course
const enrollFree = async (req, res) => {
  try {
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    if (!course.isFree && course.price?.original > 0) {
      return res.status(400).json({ success: false, message: "This is a paid course. Please make payment." });
    }

    // Check if already enrolled
    const existing = await Enrollment.findOne({ user: req.user._id, course: courseId });
    if (existing) return res.status(400).json({ success: false, message: "Already enrolled" });

    // Create enrollment
    const enrollment = await Enrollment.create({
      user:          req.user._id,
      course:        courseId,
      paymentStatus: "free",
      amountPaid:    0,
    });

    // Create progress record
    await Progress.create({
      user:       req.user._id,
      course:     courseId,
      enrollment: enrollment._id,
    });

    // Update student count
    await Course.findByIdAndUpdate(courseId, { $inc: { totalStudents: 1 } });

    res.status(201).json({ success: true, message: "Enrolled successfully!", enrollment });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: "Already enrolled in this course" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/enrollment/my — get all courses I'm enrolled in
const getMyEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id })
      .populate("course", "title thumbnail instructor category level rating")
      .sort({ enrolledAt: -1 });

    res.status(200).json({ success: true, total: enrollments.length, enrollments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/enrollment/check/:courseId — check if enrolled in a course
const checkEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findOne({
      user:   req.user._id,
      course: req.params.id,
    });

    res.status(200).json({
      success:    true,
      isEnrolled: !!enrollment,
      enrollment: enrollment || null,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { enrollFree, getMyEnrollments, checkEnrollment };