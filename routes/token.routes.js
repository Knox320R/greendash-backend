const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/token.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

router.post('/', tokenController.createTransaction);
router.get('/', tokenController.getAllTransactions);
router.get('/:id', tokenController.getTransactionById);
router.put('/:id', tokenController.updateTransaction);
// Only admin can delete token transactions
router.delete('/:id', roleMiddleware('admin'), tokenController.deleteTransaction);
router.post('/condition', tokenController.getTransactionsByCondition);

module.exports = router; 