const axios = require("axios");
require("dotenv").config();

const PAYMOB_API_KEY = process.env.PAYMOB_API_KEY;
const CARD_INTEGRATION_ID = process.env.PAYMOB_CARD_INTEGRATION_ID;
const MEEZA_INTEGRATION_ID = process.env.PAYMOB_MEEZA_INTEGRATION_ID;
const IFRAME_ID = process.env.PAYMOB_IFRAME_ID;

exports.getPaymentToken = async (req, res) => {
  try {
    const { amount_cents, user } = req.body;

    const authRes = await axios.post("https://accept.paymob.com/api/auth/tokens", {
      api_key: PAYMOB_API_KEY,
    });

    const token = authRes.data.token;

    const orderRes = await axios.post("https://accept.paymob.com/api/ecommerce/orders", {
      auth_token: token,
      delivery_needed: false,
      amount_cents,
      currency: "EGP",
      items: [],
    });

    const orderId = orderRes.data.id;

    const paymentKeyRes = await axios.post("https://accept.paymob.com/api/acceptance/payment_keys", {
      auth_token: token,
      amount_cents,
      expiration: 3600,
      order_id: orderId,
      currency: "EGP",
      integration_id: user.method === "meeza" ? MEEZA_INTEGRATION_ID : CARD_INTEGRATION_ID,
      billing_data: {
        email: user.email || "placeholder@email.com",
        first_name: user.name || "Test",
        last_name: "User",
        phone_number: user.phone || "+201000000000",
        apartment: "NA", floor: "NA", street: "NA", building: "NA",
        city: "Cairo", country: "EG", state: "NA",
      },
    });

    res.json({
      iframe_url: `https://accept.paymob.com/api/acceptance/iframes/${IFRAME_ID}?payment_token=${paymentKeyRes.data.token}`,
    });
  } catch (err) {
    console.error("🔥 Paymob Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to generate Paymob link" });
  }
};
