const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referral.controller');

router.post('/', referralController.createAffiliate);
router.get('/', referralController.getAllAffiliates);
router.get('/:id', referralController.getAffiliateById);
router.put('/:id', referralController.updateAffiliate);
router.delete('/:id', referralController.deleteAffiliate);
router.post('/condition', referralController.getAffiliatesByCondition);

module.exports = router; 