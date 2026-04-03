const { ClerkExpressRequireAuth, ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

// ─── CLERK CONFIG ─────────────────────────────────────────────────────────────
// Clerk automatically picks up CLERK_SECRET_KEY from .env
// No extra config needed — just export the middleware helpers

// Use this on routes that MUST be logged in
const requireAuth = ClerkExpressRequireAuth();

// Use this on routes where login is optional
const withAuth = ClerkExpressWithAuth();

// ─── VERIFY CLERK TOKEN ───────────────────────────────────────────────────────
// Manual token verification helper (useful for webhooks etc.)
const { createClerkClient } = require("@clerk/clerk-sdk-node");

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

// Get user details from Clerk by clerkId
const getClerkUser = async (clerkId) => {
  try {
    const user = await clerkClient.users.getUser(clerkId);
    return {
      id:        user.id,
      firstName: user.firstName,
      lastName:  user.lastName,
      email:     user.emailAddresses[0]?.emailAddress || "",
      avatar:    user.imageUrl || "",
    };
  } catch (error) {
    console.error("❌ Clerk getUser error:", error.message);
    return null;
  }
};

module.exports = { requireAuth, withAuth, clerkClient, getClerkUser };