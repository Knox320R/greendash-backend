const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const StakingPackage = sequelize.define('StakingPackage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  minAmount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  maxAmount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  dailyRate: {
    type: DataTypes.DECIMAL(5, 4),
    allowNull: false,
  },
  lockPeriod: {
    type: DataTypes.INTEGER, // days
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = StakingPackage; 