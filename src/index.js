require('dotenv').config();
const express = require('express');
const transactionsRouter = require('./routes/transactions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/transactions', transactionsRouter);

app.listen(PORT, () => {
  console.log(`Payments API listening on port ${PORT}`);
});
