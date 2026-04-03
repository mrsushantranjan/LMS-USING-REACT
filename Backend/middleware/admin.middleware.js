// Use AFTER requireAuth + syncUser

const isAdmin = (req, res, next) => {
    if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
    if (req.user.role !== "admin") return res.status(403).json({ success: false, message: "Admin access only" });
    next();
  };
  
  const isInstructor = (req, res, next) => {
    if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
    if (!["instructor", "admin"].includes(req.user.role)) {
      return res.status(403).json({ success: false, message: "Instructor access only" });
    }
    next();
  };
  
  module.exports = { isAdmin, isInstructor };