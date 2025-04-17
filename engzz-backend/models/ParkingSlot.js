const mongoose = require("mongoose");

const parkingSlotSchema = new mongoose.Schema({
  parking_id: { type: mongoose.Schema.Types.ObjectId, ref: "Parking", required: true },
  status: { type: String, enum: ["available", "occupied", "reserved"], default: "available" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  reservation_time: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model("ParkingSlot", parkingSlotSchema);
