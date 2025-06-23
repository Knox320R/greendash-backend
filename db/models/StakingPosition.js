const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * StakingPosition Model
 * Represents a user's active or completed staking position.
 *
 * Example:
 * {
 *   id: 1,
 *   user_id: 1, // FK to users
 *   package_id: 2, // FK to staking_packages
 *   amount: 1000,
 *   start_date: '2024-06-01T12:00:00Z',
 *   end_date: '2025-06-01T12:00:00Z',
 *   status: 'active',
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const StakingPosition = sequelize.define('StakingPosition', {
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
   * Staking package ID (FK to staking_packages)
   * Example: 2
   */
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  /**
   * Amount staked
   * Example: 1000
   */
  amount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  /**
   * Staking start date
   * Example: '2024-06-01T12:00:00Z'
   */
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  /**
   * Staking end date (when tokens unlock)
   * Example: '2025-06-01T12:00:00Z'
   */
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  /**
   * Status of the staking position ('active', 'completed', 'cancelled')
   * Example: 'active'
   */
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
}, {
  timestamps: true,
  tableName: 'staking_positions',
});

module.exports = StakingPosition; 