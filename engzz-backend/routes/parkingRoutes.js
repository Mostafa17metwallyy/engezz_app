const express = require("express");
const router = express.Router();
const Parking = require("../models/Parking");

router.get("/", async (req, res) => {
  try {
    const parkings = await Parking.find();
    res.status(200).json(parkings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch parking data" });
  }
});

module.exports = router;
