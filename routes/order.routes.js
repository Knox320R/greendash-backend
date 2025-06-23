const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
// Only admin can update or delete orders
router.put('/:id', roleMiddleware('admin'), orderController.updateOrder);
router.delete('/:id', roleMiddleware('admin'), orderController.deleteOrder);
router.post('/condition', orderController.getOrdersByCondition);

module.exports = router; 