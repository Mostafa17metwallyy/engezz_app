const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  transaction_type: { type: String, enum: ["parking", "toll", "balance_recharge"], required: true },
  amount: { type: Number, required: true },
  transaction_time: { type: Date, default: Date.now },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  parking_id: { type: mongoose.Schema.Types.ObjectId, ref: "Parking", default: null },
  toll_id: { type: mongoose.Schema.Types.ObjectId, ref: "Toll", default: null },
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
