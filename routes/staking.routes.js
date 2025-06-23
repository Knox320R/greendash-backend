const express = require('express');
const router = express.Router();
const stakingController = require('../controllers/staking.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

// Only admin can create, update, or delete staking packages
router.post('/', roleMiddleware('admin'), stakingController.createPackage);
router.get('/', stakingController.getAllPackages);
router.get('/:id', stakingController.getPackageById);
router.put('/:id', roleMiddleware('admin'), stakingController.updatePackage);
router.delete('/:id', roleMiddleware('admin'), stakingController.deletePackage);
router.post('/condition', stakingController.getPackagesByCondition);

module.exports = router; 