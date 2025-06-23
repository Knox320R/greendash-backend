const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
// Only admin can delete users
router.delete('/:id', userController.deleteUser);
router.post('/condition', userController.getUsersByCondition);

module.exports = router; 