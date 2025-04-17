const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  hourly_rate: { type: Number, required: true },
  image_url: { type: String, required: true },
  location_url: { type: String },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
}, { timestamps: true });

module.exports = mongoose.model("Parking", parkingSchema);
