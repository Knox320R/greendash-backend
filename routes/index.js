const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/users', require('./user.routes'));
router.use('/admin', require('./admin.routes'));
router.use('/staking', require('./staking.routes'));
router.use('/referral', require('./referral.routes'));
router.use('/orders', require('./order.routes'));
router.use('/dashboard', require('./dashboard.routes'));
router.use('/token', require('./token.routes'));
router.use('/testimonial', require('./testimonial.routes'));

module.exports = router; 