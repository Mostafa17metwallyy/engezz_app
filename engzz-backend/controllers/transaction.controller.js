const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
  try {
    const { user_id, amount, method } = req.body;

    const newTransaction = await Transaction.create({
      user_id,
      amount,
      transaction_type: "balance_recharge",
      status: "completed",
      transaction_time: new Date(),
    });

    res.status(201).json(newTransaction);
  } catch (err) {
    console.error("Error saving transaction:", err);
    res.status(500).json({ message: "Transaction failed" });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({}).sort({ transaction_time: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch transactions" });
  }
};
