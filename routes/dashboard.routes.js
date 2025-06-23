const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

// Only admin can access activity log and stats
router.post('/activity', dashboardController.createActivity);
router.get('/activity', dashboardController.getAllActivities);
router.get('/activity/:id', dashboardController.getActivityById);
router.put('/activity/:id', dashboardController.updateActivity);
router.delete('/activity/:id', dashboardController.deleteActivity);
router.get('/stats', dashboardController.getStats);

module.exports = router; 