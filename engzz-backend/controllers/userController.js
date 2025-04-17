const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ======================
// REGISTER USER
// ======================
const registerUser = async (req, res) => {
  console.log("📥 Incoming registration request headers:", req.headers);
  console.log("📥 Incoming registration request body:", req.body);

  const { name, email, phone_number, password, vehicle_plate_number } = req.body;

  try {
    if (!name || !email || !phone_number || !password || !vehicle_plate_number) {
      console.log("⚠️ Missing fields");
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { vehicle_plate_number }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email or plate number already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone_number,
      password_hash: hashedPassword,
      vehicle_plate_number,
    });

    console.log("✅ User created:", user);
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
    console.error("❌ Registration failed:", error);
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

// ======================
// LOGIN USER
// ======================
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
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
    console.error("❌ Login Error:", error.message);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

module.exports = { registerUser, loginUser };
