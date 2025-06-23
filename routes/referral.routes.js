const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referral.controller');

router.get('/network', referralController.getNetwork);
router.get('/bonuses', referralController.calculateBonuses);

module.exports = router; 