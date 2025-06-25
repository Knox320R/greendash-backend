const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/recover', authMiddleware, authController.recoverPassword);
// router.post('/verify-registration', authController.verifyRegistration);

module.exports = router; 