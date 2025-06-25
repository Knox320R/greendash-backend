const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware("admin"), adminController.createSetting);
router.get('/', adminController.getAllSettings);
router.get('/:id', adminController.getSettingById);
router.put('/:id', authMiddleware, roleMiddleware("admin"), adminController.updateSetting);
router.delete('/:id', authMiddleware, roleMiddleware("admin"), adminController.deleteSetting);
router.post('/message', adminController.sendMessageToAdmin);

module.exports = router; 