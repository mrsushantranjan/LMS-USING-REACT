import mongoose from "mongoose";
import bcrypt    from "bcryptjs";

// ─── PERMISSIONS PER ROLE ─────────────────────────────────────────────────────
export const ROLE_PERMISSIONS = {
  student: [
    "course:read",
    "enrollment:create",
    "enrollment:read",
    "progress:read",
    "progress:update",
    "certificate:read",
    "profile:read",
    "profile:update",
  ],
  instructor: [
    "course:read",
    "course:create",
    "course:update",
    "enrollment:read",
    "progress:read",
    "certificate:read",
    "profile:read",
    "profile:update",
  ],
  admin: [
    "course:read",
    "course:create",
    "course:update",
    "course:delete",
    "enrollment:read",
    "enrollment:create",
    "enrollment:delete",
    "progress:read",
    "progress:update",
    "certificate:read",
    "certificate:create",
    "user:read",
    "user:update",
    "user:delete",
    "profile:read",
    "profile:update",
    "admin:dashboard",
    "admin:orders",
  ],
};

// ─── USER SCHEMA ──────────────────────────────────────────────────────────────
const userSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6, select: false },

    role: {
      type:    String,
      enum:    ["student", "instructor", "admin"],
      default: "student",
    },

    permissions: {
      type:    [String],
      default: ROLE_PERMISSIONS.student,
    },

    avatar:      { type: String, default: "" },
    bio:         { type: String, default: "" },
    phone:       { type: String, default: "" },
    isActive:    { type: Boolean, default: true },
    enrollments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

// ─── PRE-SAVE ─────────────────────────────────────────────────────────────────
userSchema.pre("save", async function () {
  // Hash password only when modified
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  // Sync permissions when role changes
  if (this.isModified("role")) {
    this.permissions = ROLE_PERMISSIONS[this.role] || ROLE_PERMISSIONS.student;
  }
});

// ─── INSTANCE METHODS ─────────────────────────────────────────────────────────
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.hasPermission = function (permission) {
  return this.permissions.includes(permission);
};

userSchema.methods.isRole = function (role) {
  return this.role === role;
};

// ─── STATIC METHODS ───────────────────────────────────────────────────────────
userSchema.statics.getPermissionsForRole = function (role) {
  return ROLE_PERMISSIONS[role] || ROLE_PERMISSIONS.student;
};

export default mongoose.models.User || mongoose.model("User", userSchema);
