const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * TokenTransaction Model
 * Records all token movements (staking, rewards, bonuses, purchases, etc.).
 *
 * Example:
 * {
 *   id: 1,
 *   user_id: 1, // FK to users
 *   type: 'reward', // 'stake', 'reward', 'bonus', 'purchase', etc.
 *   amount: 5.00,
 *   related_id: 10, // FK to related entity (optional)
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const TokenTransaction = sequelize.define('TokenTransaction', {
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
   * Transaction type ('stake', 'reward', 'bonus', 'purchase', etc.)
   * Example: 'reward'
   */
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  /**
   * Amount of tokens moved
   * Example: 5.00
   */
  amount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  /**
   * Related entity ID (optional, e.g., staking position, order, bonus)
   * Example: 10
   */
  related_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'token_transactions',
});

module.exports = TokenTransaction; 