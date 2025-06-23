const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * AdminSettings Model
 * Stores global configuration for the platform (rates, bonus %, etc.).
 *
 * Example:
 * {
 *   id: 1,
 *   key: 'TOKEN_DAILY_RATE',
 *   value: '0.0005',
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const AdminSettings = sequelize.define('AdminSettings', {
  /**
   * Auto-incrementing primary key
   * Example: 1
   */
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  /**
   * Setting key (e.g., 'TOKEN_DAILY_RATE', 'REFERRAL_BONUS_LEVELS')
   * Example: 'TOKEN_DAILY_RATE'
   */
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  /**
   * Setting value (stringified if array/object)
   * Example: '0.0005' or '[0.05,0.03,0.01]'
   */
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'admin_settings',
});

module.exports = AdminSettings; 