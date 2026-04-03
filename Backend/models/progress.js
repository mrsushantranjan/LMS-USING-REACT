const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    user:       { type: mongoose.Schema.Types.ObjectId, ref: "User",       required: true },
    course:     { type: mongoose.Schema.Types.ObjectId, ref: "Course",     required: true },
    enrollment: { type: mongoose.Schema.Types.ObjectId, ref: "Enrollment", required: true },

    completedChapters:  [{ type: String }],
    lastWatchedChapter: { type: String,  default: null },
    lastWatchedAt:      { type: Date,    default: null },
    progressPercent:    { type: Number,  default: 0 },
    isCompleted:        { type: Boolean, default: false },
    completedAt:        { type: Date,    default: null },
  },
  { timestamps: true }
);

progressSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.models.Progress || mongoose.model("Progress", progressSchema);