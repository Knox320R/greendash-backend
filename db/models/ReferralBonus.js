const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const ReferralBonus = sequelize.define('ReferralBonus', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  referredUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = ReferralBonus; 