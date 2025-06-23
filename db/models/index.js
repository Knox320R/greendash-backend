const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const User = require('./User');
const AffiliateRelationship = require('./AffiliateRelationship');
const StakingPackage = require('./StakingPackage');
const StakingPosition = require('./StakingPosition');
const Order = require('./Order');
const TokenTransaction = require('./TokenTransaction');
const ReferralBonus = require('./ReferralBonus');
const Activity = require('./Activity');
const AdminSettings = require('./AdminSettings');

// -------------------
// Model Associations
// -------------------

// User <-> AffiliateRelationship (referrer and referred)
User.hasMany(AffiliateRelationship, { foreignKey: 'referrer_id', as: 'referrals' }); // user.referrals
User.hasMany(AffiliateRelationship, { foreignKey: 'referred_id', as: 'referralsReceived' }); // user.referralsReceived
AffiliateRelationship.belongsTo(User, { foreignKey: 'referrer_id', as: 'referrer' });
AffiliateRelationship.belongsTo(User, { foreignKey: 'referred_id', as: 'referred' });

// User <-> StakingPosition
User.hasMany(StakingPosition, { foreignKey: 'user_id', as: 'stakingPositions' });
StakingPosition.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// StakingPackage <-> StakingPosition
StakingPackage.hasMany(StakingPosition, { foreignKey: 'package_id', as: 'positions' });
StakingPosition.belongsTo(StakingPackage, { foreignKey: 'package_id', as: 'package' });

// User <-> Order
User.hasMany(Order, { foreignKey: 'user_id', as: 'orders' });
Order.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// User <-> TokenTransaction
User.hasMany(TokenTransaction, { foreignKey: 'user_id', as: 'tokenTransactions' });
TokenTransaction.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// User <-> ReferralBonus (as referrer)
User.hasMany(ReferralBonus, { foreignKey: 'user_id', as: 'referralBonuses' });
ReferralBonus.belongsTo(User, { foreignKey: 'user_id', as: 'referrer' });
// User <-> ReferralBonus (as referred)
User.hasMany(ReferralBonus, { foreignKey: 'referred_user_id', as: 'referralBonusesReceived' });
ReferralBonus.belongsTo(User, { foreignKey: 'referred_user_id', as: 'referredUser' });

// User <-> Activity
User.hasMany(Activity, { foreignKey: 'user_id', as: 'activities' });
Activity.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// No direct associations for AdminSettings (key-value store)

module.exports = {
  sequelize,
  Sequelize,
  User,
  AffiliateRelationship,
  StakingPackage,
  StakingPosition,
  Order,
  TokenTransaction,
  ReferralBonus,
  AdminSettings,
}; 