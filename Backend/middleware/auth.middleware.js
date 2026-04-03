const { ClerkExpressRequireAuth, ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");
const User = require("../models/user");

// ─── REQUIRE AUTH — use on protected routes ───────────────────────────────────
const requireAuth = ClerkExpressRequireAuth();

// ─── OPTIONAL AUTH — use on public routes ────────────────────────────────────
const withAuth = ClerkExpressWithAuth();

// ─── SYNC USER — run after requireAuth ───────────────────────────────────────
// Finds or creates the user in MongoDB after Clerk verifies the token
const syncUser = async (req, res, next) => {
  try {
    const clerkId = req.auth?.userId;

    if (!clerkId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Find existing user or create new one
    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await User.create({
        clerkId,
        name:  req.auth?.sessionClaims?.name  || "User",
        email: req.auth?.sessionClaims?.email || `${clerkId}@temp.com`,
        role:  "student",
      });
      console.log(`✅ New user created in MongoDB: ${clerkId}`);
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("syncUser error:", error.message);
    res.status(500).json({ success: false, message: "Auth sync failed" });
  }
};

module.exports = { requireAuth, withAuth, syncUser };