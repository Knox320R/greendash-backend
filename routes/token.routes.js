const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/token.controller');

router.post('/', tokenController.createTransaction);
router.get('/', tokenController.getAllTransactions);
router.get('/:id', tokenController.getTransactionById);
router.put('/:id', tokenController.updateTransaction);
router.delete('/:id', tokenController.deleteTransaction);
router.post('/condition', tokenController.getTransactionsByCondition);

module.exports = router; 