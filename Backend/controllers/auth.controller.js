const User = require("../models/user");

// POST /api/auth/sync
const syncUserProfile = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "User synced", user: req.user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/auth/me
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/auth/me
const updateMe = async (req, res) => {
  try {
    const { name, bio, phone, avatar } = req.body;
    const updated = await User.findByIdAndUpdate(
      req.user._id,
      { name, bio, phone, avatar },
      { new: true, runValidators: true }
    );
    res.status(200).json({ success: true, message: "Profile updated", user: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { syncUserProfile, getMe, updateMe };