const express = require("express");
const router = express.Router();
const Toll = require("../models/Tolls"); // Make sure the filename matches

// GET all tolls
router.get("/", async (req, res) => {
  try {
    const tolls = await Toll.find();
    res.status(200).json(tolls);
  } catch (err) {
    console.error("❌ Failed to fetch tolls:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
