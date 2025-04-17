const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  phone_number: { type: String, unique: true, required: true },
  password_hash: { type: String, required: true },
  vehicle_plate_number: { type: String, unique: true, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
