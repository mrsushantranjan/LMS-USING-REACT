const Course = require("../models/course");

// GET /api/courses
const getAllCourses = async (req, res) => {
  try {
    const { category, level, search, sort } = req.query;
    const filter = { isPublished: true };

    if (category && category !== "All")        filter.category = category;
    if (level    && level    !== "All Levels") filter.level    = level;
    if (search) {
      filter.$or = [
        { title:       { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    let sortOpt = { createdAt: -1 };
    if (sort === "Popular")            sortOpt = { totalStudents: -1 };
    if (sort === "Top Rated")          sortOpt = { rating: -1 };
    if (sort === "Price: Low to High") sortOpt = { "price.sale": 1 };
    if (sort === "Price: High to Low") sortOpt = { "price.sale": -1 };

    const courses = await Course.find(filter)
      .populate("instructor", "name avatar")
      .sort(sortOpt);

    res.status(200).json({ success: true, total: courses.length, courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/courses/:id
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("instructor", "name avatar bio");

    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    res.status(200).json({ success: true, course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/courses
const createCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body, instructor: req.user._id });
    res.status(201).json({ success: true, message: "Course created", course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/courses/:id
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, message: "Course updated", course: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/courses/:id
const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/courses/:id/rate
const rateCourse = async (req, res) => {
  try {
    const { rating } = req.body;
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: "Rating must be 1–5" });
    }

    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    const newTotal  = course.totalRatings + 1;
    const newRating = ((course.rating * course.totalRatings) + rating) / newTotal;

    await Course.findByIdAndUpdate(req.params.id, {
      rating:       Math.round(newRating * 10) / 10,
      totalRatings: newTotal,
    });

    res.status(200).json({ success: true, message: "Rating submitted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse, rateCourse };