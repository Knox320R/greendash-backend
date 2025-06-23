const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/', adminController.createSetting);
router.get('/', adminController.getAllSettings);
router.get('/:id', adminController.getSettingById);
router.put('/:id', adminController.updateSetting);
router.delete('/:id', adminController.deleteSetting);

module.exports = router; 