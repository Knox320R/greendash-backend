const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// All routes require authentication
// router.use(authMiddleware);

// Only admin can access activity log and stats
router.post('/', dashboardController.createActivity);
router.get('/', dashboardController.getAllActivities);
router.get('/:id', dashboardController.getActivityById);
router.put('/:id', dashboardController.updateActivity);
router.delete('/:id', dashboardController.deleteActivity);
router.get('/stats', dashboardController.getStats);

module.exports = router; 