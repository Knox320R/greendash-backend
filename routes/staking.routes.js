const express = require('express');
const router = express.Router();
const stakingController = require('../controllers/staking.controller');

router.get('/packages', stakingController.getPackages);
router.post('/position', stakingController.createPosition);
router.get('/profitability', stakingController.getProfitability);

module.exports = router; 