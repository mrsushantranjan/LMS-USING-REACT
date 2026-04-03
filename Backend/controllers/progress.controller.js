const Progress   = require("../models/progress");
const Enrollment = require("../models/enrollment");
const Course     = require("../models/course");

// Helper — calculate progress percentage
const calcPercent = (completedChapters, course) => {
  const totalChapters = course.lectures.reduce(
    (sum, lec) => sum + (lec.chapters?.length || 0), 0
  );
  if (totalChapters === 0) return 0;
  return Math.round((completedChapters.length / totalChapters) * 100);
};

// GET /api/progress/:courseId
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user:   req.user._id,
      course: req.params.courseId,
    });

    if (!progress) return res.status(404).json({ success: false, message: "Progress not found. Are you enrolled?" });

    res.status(200).json({ success: true, progress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/progress/:courseId/complete  body: { chapterId }
const markChapterComplete = async (req, res) => {
  try {
    const { chapterId } = req.body;
    const { courseId }  = req.params;

    if (!chapterId) return res.status(400).json({ success: false, message: "chapterId is required" });

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    let progress = await Progress.findOne({ user: req.user._id, course: courseId });
    if (!progress) return res.status(404).json({ success: false, message: "Not enrolled in this course" });

    // Add chapter if not already completed
    if (!progress.completedChapters.includes(chapterId)) {
      progress.completedChapters.push(chapterId);
    }

    progress.lastWatchedChapter = chapterId;
    progress.lastWatchedAt      = new Date();
    progress.progressPercent    = calcPercent(progress.completedChapters, course);
    progress.isCompleted        = progress.progressPercent === 100;
    if (progress.isCompleted && !progress.completedAt) {
      progress.completedAt = new Date();
    }

    await progress.save();

    // Sync to enrollment too
    await Enrollment.findOneAndUpdate(
      { user: req.user._id, course: courseId },
      {
        completedChapters: progress.completedChapters,
        progressPercent:   progress.progressPercent,
        isCompleted:       progress.isCompleted,
        completedAt:       progress.completedAt,
      }
    );

    res.status(200).json({
      success:         true,
      message:         "Chapter marked as complete ✅",
      progressPercent: progress.progressPercent,
      isCompleted:     progress.isCompleted,
      progress,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/progress/:courseId/incomplete  body: { chapterId }
const markChapterIncomplete = async (req, res) => {
  try {
    const { chapterId } = req.body;
    const { courseId }  = req.params;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    let progress = await Progress.findOne({ user: req.user._id, course: courseId });
    if (!progress) return res.status(404).json({ success: false, message: "Not enrolled" });

    // Remove chapter from completed list
    progress.completedChapters = progress.completedChapters.filter((id) => id !== chapterId);
    progress.progressPercent   = calcPercent(progress.completedChapters, course);
    progress.isCompleted       = false;

    await progress.save();

    // Sync to enrollment
    await Enrollment.findOneAndUpdate(
      { user: req.user._id, course: courseId },
      {
        completedChapters: progress.completedChapters,
        progressPercent:   progress.progressPercent,
        isCompleted:       false,
      }
    );

    res.status(200).json({
      success:         true,
      message:         "Chapter marked incomplete",
      progressPercent: progress.progressPercent,
      progress,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getProgress, markChapterComplete, markChapterIncomplete };