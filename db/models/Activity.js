const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * Activity Model
 * Logs all user actions for audit, analytics, and troubleshooting.
 *
 * Example:
 * {
 *   id: 1,
 *   user_id: 1, // FK to users
 *   action: 'stake_created',
 *   details: { amount: 1000, package: 'Bronze' },
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const Activity = sequelize.define('Activity', {
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
   * User ID (FK to users)
   * Example: 1
   */
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  /**
   * Action performed (string/enum)
   * Example: 'stake_created', 'login', 'order_placed'
   */
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  /**
   * Additional details (JSON object)
   * Example: { amount: 1000, package: 'Bronze' }
   */
  details: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'activities',
});

module.exports = Activity; 