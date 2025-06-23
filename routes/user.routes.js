const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/condition', userController.getUsersByCondition);

module.exports = router; 