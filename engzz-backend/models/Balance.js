const mongoose = require("mongoose");

const balanceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance_amount: { type: Number, default: 0.0 },
}, { timestamps: true });

module.exports = mongoose.model("Balance", balanceSchema);
