const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/', orderController.createOrder);
router.post('/approve', orderController.approveOrder);

module.exports = router; 