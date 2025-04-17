const mongoose = require("mongoose");

const latePaymentFeeSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  due_amount: { type: Number, required: true },
  due_date: { type: Date, required: true },
  status: { type: String, enum: ["pending", "paid"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("LatePaymentFee", latePaymentFeeSchema);
