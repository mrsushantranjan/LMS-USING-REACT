const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    clerkId:  { type: String, required: true, unique: true },
    name:     { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    role:     { type: String, enum: ["student", "instructor", "admin"], default: "student" },
    avatar:   { type: String, default: "" },
    bio:      { type: String, default: "" },
    phone:    { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);