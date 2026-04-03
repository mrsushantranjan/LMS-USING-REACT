import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

// ── MongoDB ───────────────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ── User Model ────────────────────────────────────────────────────────────────
const userSchema = new mongoose.Schema(
  {
    clerkId:     { type: String, required: true, unique: true },
    name:        { type: String, required: true },
    email:       { type: String, required: true, unique: true },
    role:        { type: String, enum: ["student", "instructor", "admin"], default: "student" },
    avatar:      { type: String, default: "" },
    bio:         { type: String, default: "" },
    phone:       { type: String, default: "" },
    isActive:    { type: Boolean, default: true },
    enrollments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

// ── Course Model ──────────────────────────────────────────────────────────────
const chapterSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  videoUrl:    { type: String, default: "" },
  duration:    { type: Number, default: 0 },
  isFree:      { type: Boolean, default: false },
  description: { type: String, default: "" },
});

const lectureSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  chapters: [chapterSchema],
  duration: { type: Number, default: 0 },
});

const courseSchema = new mongoose.Schema(
  {
    title:         { type: String, required: true },
    description:   { type: String, required: true },
    thumbnail:     { type: String, default: "" },
    instructor:    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category:      { type: String, required: true },
    level:         { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
    price: {
      original: { type: Number, default: 0 },
      sale:     { type: Number, default: null },
    },
    isFree:        { type: Boolean, default: false },
    isPublished:   { type: Boolean, default: false },
    lectures:      [lectureSchema],
    totalStudents: { type: Number, default: 0 },
    totalDuration: { type: Number, default: 0 },
    rating:        { type: Number, default: 0 },
    totalRatings:  { type: Number, default: 0 },
    tags:          [{ type: String }],
  },
  { timestamps: true }
);
const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

// ── Enrollment Model ──────────────────────────────────────────────────────────
const enrollmentSchema = new mongoose.Schema(
  {
    user:      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    course:    { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    enrolledAt: { type: Date, default: Date.now },
    progress:  { type: Number, default: 0 },
  },
  { timestamps: true }
);
enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });
const Enrollment = mongoose.models.Enrollment || mongoose.model("Enrollment", enrollmentSchema);

// ── Routes ────────────────────────────────────────────────────────────────────

app.get("/", (req, res) => res.send("API is running..."));

// Auth Sync — save/update user in DB
app.post("/api/auth/sync", async (req, res) => {
  try {
    const { clerkId, name, email, avatar } = req.body;
    if (!clerkId || !email)
      return res.status(400).json({ message: "clerkId and email are required" });

    const user = await User.findOneAndUpdate(
      { clerkId },
      { clerkId, name, email, avatar },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log("✅ User synced:", user.email);
    res.status(200).json({ success: true, message: "User synced", user });
  } catch (error) {
    console.error("Error syncing user:", error);
    res.status(500).json({ message: "Error syncing user", error: error.message });
  }
});

// Get all courses
app.get("/api/courses", async (req, res) => {
  try {
    const { search, category, level, sort } = req.query;
    const filter = {};

    if (search) {
      filter.$or = [
        { title:       { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (category) filter.category = { $regex: category, $options: "i" };
    if (level)    filter.level    = level;

    let sortOption = { totalStudents: -1 };
    if (sort === "newest")     sortOption = { createdAt: -1 };
    if (sort === "rating")     sortOption = { rating: -1 };
    if (sort === "price-low")  sortOption = { "price.original": 1 };
    if (sort === "price-high") sortOption = { "price.original": -1 };

    const courses = await Course.find(filter).sort(sortOption).lean();
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Error fetching courses", error: error.message });
  }
});

// Get single course by ID
app.get("/api/courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).lean();
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ message: "Error fetching course", error: error.message });
  }
});

// Enroll in a course
app.post("/api/courses/:id/enroll", async (req, res) => {
  try {
    const { clerkId } = req.body;
    const courseId    = req.params.id;

    if (!clerkId) return res.status(400).json({ message: "clerkId is required" });

    const user = await User.findOne({ clerkId });
    if (!user) return res.status(404).json({ message: "User not found. Please sync first." });

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Already enrolled
    const existing = await Enrollment.findOne({ user: user._id, course: courseId });
    if (existing)
      return res.status(200).json({ success: true, message: "Already enrolled", enrollment: existing });

    const enrollment = await Enrollment.create({ user: user._id, course: courseId });
    await Course.findByIdAndUpdate(courseId, { $inc: { totalStudents: 1 } });
    await User.findByIdAndUpdate(user._id, { $addToSet: { enrollments: courseId } });

    console.log(`✅ ${user.email} enrolled in "${course.title}"`);
    res.status(201).json({ success: true, message: "Enrolled successfully", enrollment });
  } catch (error) {
    console.error("Error enrolling:", error);
    res.status(500).json({ message: "Error enrolling", error: error.message });
  }
});

// Check enrollment status
app.get("/api/courses/:id/enrollment-status", async (req, res) => {
  try {
    const { clerkId } = req.query;
    if (!clerkId) return res.json({ isEnrolled: false });

    const user = await User.findOne({ clerkId });
    if (!user) return res.json({ isEnrolled: false });

    const enrollment = await Enrollment.findOne({ user: user._id, course: req.params.id });
    res.json({ isEnrolled: !!enrollment, enrollment });
  } catch (error) {
    res.status(500).json({ message: "Error checking enrollment", error: error.message });
  }
});

// Get user's enrolled courses
app.get("/api/users/:clerkId/enrollments", async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId });
    if (!user) return res.status(404).json({ message: "User not found" });

    const enrollments = await Enrollment.find({ user: user._id })
      .populate("course")
      .lean();

    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments", error: error.message });
  }
});

// 404
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// Start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));