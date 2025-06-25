const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const PendingUser = sequelize.define('PendingUser', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'pending_users',
});

module.exports = PendingUser; 