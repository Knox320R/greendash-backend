const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * Order Model
 * Represents a user's token purchase order.
 *
 * Example:
 * {
 *   id: 1,
 *   user_id: 1, // FK to users
 *   amount_paid: 100.00,
 *   tokens_requested: 1000,
 *   payment_method: 'stripe',
 *   status: 'pending',
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const Order = sequelize.define('Order', {
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
   * Amount paid for the order (in fiat or crypto)
   * Example: 100.00
   */
  amount_paid: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  /**
   * Number of tokens requested in the order
   * Example: 1000
   */
  tokens_requested: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  /**
   * Payment method (e.g., 'stripe', 'crypto')
   * Example: 'stripe'
   */
  payment_method: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  /**
   * Order status ('pending', 'approved', 'rejected')
   * Example: 'pending'
   */
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
  tableName: 'orders',
});

module.exports = Order; 