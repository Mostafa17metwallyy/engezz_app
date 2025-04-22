const User = require("../models/User");

// Get current user profile (via token)
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password_hash");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error: error.message });
  }
};

// Update user by ID
const updateUserProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile", error: error.message });
  }
};

// Delete user by ID
const deleteUserAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete account", error: error.message });
  }
};

const registerUser = async (req, res) => {
  const { name, email, phone_number, password, vehicle_plate_number } = req.body;

  try {
    if (!name || !email || !phone_number || !password || !vehicle_plate_number) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { vehicle_plate_number }] });

    if (existingUser) {
      return res.status(400).json({ message: "Email or plate number already in use." });
    }

    const hashedPassword = await require("bcryptjs").hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone_number,
      password_hash: hashedPassword,
      vehicle_plate_number,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        vehicle_plate_number: user.vehicle_plate_number,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await require("bcryptjs").compare(password, user.password_hash);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = require("jsonwebtoken").sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        vehicle_plate_number: user.vehicle_plate_number,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUserAccount,
};
