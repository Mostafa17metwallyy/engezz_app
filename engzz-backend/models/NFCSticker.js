const mongoose = require("mongoose");

const nfcStickerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  vehicle_plate_number: { type: String, required: true },
  activation_status: { type: String, enum: ["active", "inactive"], default: "inactive" },
  issued_date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("NFCSticker", nfcStickerSchema);
