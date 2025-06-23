const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

// Only admin can access activity log and stats
router.post('/activity', roleMiddleware('admin'), dashboardController.createActivity);
router.get('/activity', roleMiddleware('admin'), dashboardController.getAllActivities);
router.get('/activity/:id', roleMiddleware('admin'), dashboardController.getActivityById);
router.put('/activity/:id', roleMiddleware('admin'), dashboardController.updateActivity);
router.delete('/activity/:id', roleMiddleware('admin'), dashboardController.deleteActivity);
router.get('/stats', roleMiddleware('admin'), dashboardController.getStats);

module.exports = router; 