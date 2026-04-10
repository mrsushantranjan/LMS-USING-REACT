const mongoose = require("mongoose");

// ─── PERMISSIONS PER ROLE ─────────────────────────────────────────────────────
const ROLE_PERMISSIONS = {
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
// No password field — Clerk handles all authentication
const userSchema = new mongoose.Schema(
  {
    // Clerk user ID — links our DB user to Clerk identity
    clerkId: { type: String, required: true, unique: true },
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, unique: true, lowercase: true, trim: true },

    // ── RBAC ─────────────────────────────────────────────────────────────────
    role: {
      type:    String,
      enum:    ["student", "instructor", "admin"],
      default: "student",
    },

    // Auto-set based on role — for quick permission lookups
    permissions: {
      type:    [String],
      default: ROLE_PERMISSIONS.student,
    },

    avatar:   { type: String, default: "" },
    bio:      { type: String, default: "" },
    phone:    { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// ─── PRE-SAVE — Auto sync permissions when role changes ───────────────────────
userSchema.pre("save", function (next) {
  if (this.isModified("role")) {
    this.permissions = ROLE_PERMISSIONS[this.role] || ROLE_PERMISSIONS.student;
  }
  next();
});

// ─── INSTANCE METHODS ─────────────────────────────────────────────────────────

// Check if user has a specific permission
userSchema.methods.hasPermission = function (permission) {
  return this.permissions.includes(permission);
};

// Check if user has a specific role
userSchema.methods.isRole = function (role) {
  return this.role === role;
};

// ─── STATIC METHODS ───────────────────────────────────────────────────────────
userSchema.statics.getPermissionsForRole = function (role) {
  return ROLE_PERMISSIONS[role] || ROLE_PERMISSIONS.student;
};

module.exports = mongoose.models.User || mongoose.model("User", userSchema);