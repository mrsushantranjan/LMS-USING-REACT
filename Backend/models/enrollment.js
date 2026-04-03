const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    user:   { type: mongoose.Schema.Types.ObjectId, ref: "User",   required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },

    paymentStatus: {
      type: String,
      enum: ["free", "pending", "completed", "failed"],
      default: "pending",
    },
    paymentId:  { type: String, default: "" },
    orderId:    { type: String, default: "" },
    amountPaid: { type: Number, default: 0 },

    completedChapters: [{ type: String }],
    progressPercent:   { type: Number, default: 0 },
    isCompleted:       { type: Boolean, default: false },
    completedAt:       { type: Date, default: null },

    certificateIssued: { type: Boolean, default: false },
    certificateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Certificate",
      default: null,
    },

    enrolledAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.models.Enrollment || mongoose.model("Enrollment", enrollmentSchema);
