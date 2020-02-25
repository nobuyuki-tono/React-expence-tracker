// @desc Get all transactions
// @route GET /api/v1/transactions
// @acess Public
exports.getTransactions = (req, res, next) => {
  res.send("GET Transactions");
};

// @desc Add transactions
// @route POST /api/v1/transactions
// @acess Public
exports.addTransaction = (req, res, next) => {
  res.send("ADD Transaction");
};

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @acess Public
