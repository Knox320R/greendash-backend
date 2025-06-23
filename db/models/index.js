const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const User = require('./User');
const TokenTransaction = require('./TokenTransaction');
const Staking = require('./Staking');
const StakingPackage = require('./StakingPackage');
const ReferralBonus = require('./ReferralBonus');
const AdminSettings = require('./AdminSettings');

// Associations (example)
User.hasMany(Staking);
Staking.belongsTo(User);
User.hasMany(TokenTransaction);
TokenTransaction.belongsTo(User);
User.hasMany(ReferralBonus);
ReferralBonus.belongsTo(User);
Staking.belongsTo(StakingPackage);

module.exports = {
  sequelize,
  Sequelize,
  User,
  TokenTransaction,
  Staking,
  StakingPackage,
  ReferralBonus,
  AdminSettings,
}; 