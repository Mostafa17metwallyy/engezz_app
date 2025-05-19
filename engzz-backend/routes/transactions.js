// routes/transactions.js
const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

router.get("/", async (req, res) => {
  try {
    const list = await Transaction.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: "Could not fetch transactions" });
  }
});

module.exports = router;
