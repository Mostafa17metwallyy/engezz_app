const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  subscription_type: { type: String, enum: ["monthly", "yearly", "pay-per-use"], required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Subscription", subscriptionSchema);
