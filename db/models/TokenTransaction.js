const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const TokenTransaction = sequelize.define('TokenTransaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING, // e.g. 'stake', 'reward', 'purchase'
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
});

module.exports = TokenTransaction; 