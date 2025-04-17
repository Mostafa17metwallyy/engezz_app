const mongoose = require("mongoose");

const tollSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location_name: { type: String, required: true },
  toll_fee: { type: Number, required: true },
  image_url: { type: String, required: true },
  location_url: { type: String },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
}, { timestamps: true });

module.exports = mongoose.model("Toll", tollSchema);
