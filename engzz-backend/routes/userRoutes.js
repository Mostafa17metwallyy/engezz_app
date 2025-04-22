const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUserAccount,
} = require("../controllers/userController");

const auth = require("../middleware/auth");

// 🟢 Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// 🟢 Forgot Password - NO AUTH REQUIRED
router.put("/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: "Email and new password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password_hash = hashed;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("❌ Password reset error:", err.message);
    res.status(500).json({ message: "Reset failed", error: err.message });
  }
});

// 🔐 Authenticated routes
router.get("/me", auth, getUserProfile);
router.put("/:id", auth, updateUserProfile);
router.delete("/:id", auth, deleteUserAccount);

module.exports = router;
