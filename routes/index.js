const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/users', require('./user.routes'));
router.use('/admin-settings', require('./admin.routes'));
router.use('/staking-packages', require('./staking.routes'));
router.use('/affiliate-relationships', require('./referral.routes'));
router.use('/orders', require('./order.routes'));
router.use('/activities', require('./dashboard.routes'));
router.use('/token', require('./token.routes'));
router.use('/landing', require('./landing.routes'));
router.use('/testimonial', require('./testimonial.routes'));

module.exports = router; 