import mongoose from "mongoose";

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
    title:       { type: String, required: true },
    description: { type: String, required: true },
    thumbnail:   { type: String, default: "" },
    instructor:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category:    { type: String, required: true },
    level:       { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
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

export default mongoose.models.Course || mongoose.model("Course", courseSchema);