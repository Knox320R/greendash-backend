const { TokenTransaction } = require('../db/models');

exports.createTransaction = async (req, res, next) => {
  try {
    const tx = await TokenTransaction.create(req.body);
    res.status(201).json(tx);
  } catch (err) { next(err); }
};

exports.getAllTransactions = async (req, res, next) => {
  try {
    const txs = await TokenTransaction.findAll();
    res.json(txs);
  } catch (err) { next(err); }
};

exports.getTransactionById = async (req, res, next) => {
  try {
    const tx = await TokenTransaction.findByPk(req.params.id);
    if (!tx) return res.status(404).json({ error: 'Transaction not found' });
    res.json(tx);
  } catch (err) { next(err); }
};

exports.updateTransaction = async (req, res, next) => {
  try {
    const tx = await TokenTransaction.findByPk(req.params.id);
    if (!tx) return res.status(404).json({ error: 'Transaction not found' });
    await tx.update(req.body);
    res.json(tx);
  } catch (err) { next(err); }
};

exports.deleteTransaction = async (req, res, next) => {
  try {
    const tx = await TokenTransaction.findByPk(req.params.id);
    if (!tx) return res.status(404).json({ error: 'Transaction not found' });
    await tx.destroy();
    res.json({ message: 'Transaction deleted' });
  } catch (err) { next(err); }
};

exports.getTransactionsByCondition = async (req, res, next) => {
  try {
    const { condition } = req.body;
    if (!condition || typeof condition !== 'object') {
      return res.status(400).json({ error: 'Invalid or missing condition object' });
    }
    const txs = await TokenTransaction.findAll({ where: condition });
    res.json(txs);
  } catch (err) { next(err); }
}; 