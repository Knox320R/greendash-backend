const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * StakingPackage Model
 * Represents a staking package/plan that users can purchase.
 *
 * Example:
 * {
 *   id: 1,
 *   name: 'Bronze',
 *   min_amount: 100,
 *   max_amount: 999,
 *   daily_return_rate: 0.0005, // 0.05% daily
 *   lock_period_days: 365,
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const StakingPackage = sequelize.define('StakingPackage', {
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
   * Package name (e.g., Bronze, Silver, Gold)
   * Example: 'Bronze'
   */
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  /**
   * Minimum staking amount for this package
   * Example: 100
   */
  min_amount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  /**
   * Maximum staking amount for this package
   * Example: 999
   */
  max_amount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  /**
   * Daily return rate (as a decimal, e.g., 0.0005 = 0.05%)
   * Example: 0.0005
   */
  daily_return_rate: {
    type: DataTypes.DECIMAL(5, 4),
    allowNull: false,
  },
  /**
   * Lock period in days
   * Example: 365
   */
  lock_period_days: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'staking_packages',
});

module.exports = StakingPackage; 