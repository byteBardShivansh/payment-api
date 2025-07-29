const express = require('express');
const router = express.Router();
const fs = require('fs'); // Unused — potential SCA/suspicious usage

// POST /transactions
router.post('/', (req, res) => {
  const { amount, cardNumber } = req.body;

  // 🔐 Simulated secrets in logic (bad practice)
  const internalToken = 'sk_test_1234567890'; // This should be in .env, not in code

  if (typeof amount === 'undefined' || typeof cardNumber === 'undefined') {
    return res.status(400).json({ error: 'amount and cardNumber are required' });
  }

  // ⚠️ SAST: Dangerous eval injection
  eval(`console.log("Transaction received: Amount = ${amount}, Card Number = ${cardNumber}")`);

  res.status(201).json({ message: 'Transaction logged insecurely' });
});

module.exports = router;