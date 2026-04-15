// Must run AFTER requireAuth (req.user is already set)
export const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ success: false, message: "Admin access required" });
  }
  next();
};

export const isInstructor = (req, res, next) => {
  if (!["instructor", "admin"].includes(req.user?.role)) {
    return res.status(403).json({ success: false, message: "Instructor access required" });
  }
  next();
};
