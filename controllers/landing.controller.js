const { 
    AdminSettings,
    Activity,
    User,
    StakingPosition,
    Order,
    AffiliateRelationship,
    StakingPackage,
    Testimonial,
    TokenTransaction } = require('../db/models');

exports.getLandingData = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.findAll();
    const adminSettings = await AdminSettings.findAll();
    const stakingPackages = await StakingPackage.findAll();
    res.json({testimonials, adminSettings, stakingPackages});
  } catch (err) { next(err); }
};
