const express = require('express');
const router = express.Router();
const stakingController = require('../controllers/staking.controller');

router.post('/', stakingController.createPackage);
router.get('/', stakingController.getAllPackages);
router.get('/:id', stakingController.getPackageById);
router.put('/:id', stakingController.updatePackage);
router.delete('/:id', stakingController.deletePackage);
router.post('/condition', stakingController.getPackagesByCondition);

module.exports = router; 