const express = require("express");
const router = express.Router();
const { getPaymentToken } = require("../controllers/paymob.controller");

router.post("/token", getPaymentToken); // ✅ make sure it's POST

module.exports = router;
