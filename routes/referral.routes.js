const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referral.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

router.post('/', referralController.createAffiliate);
router.get('/', referralController.getAllAffiliates);
router.get('/:id', referralController.getAffiliateById);
router.put('/:id', referralController.updateAffiliate);
// Only admin can delete affiliate relationships
router.delete('/:id', roleMiddleware('admin'), referralController.deleteAffiliate);
router.post('/condition', referralController.getAffiliatesByCondition);

module.exports = router; 