const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);

module.exports = router; 