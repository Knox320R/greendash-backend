const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * AffiliateRelationship Model
 * Represents a referral/affiliate connection between two users.
 * Used to build the multi-level affiliate network.
 *
 * Example:
 * {
 *   id: 1,
 *   referrer_id: 2, // User who referred
 *   referred_id: 3, // User who was referred
 *   level: 1, // 1 = direct, 2 = indirect, etc.
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const AffiliateRelationship = sequelize.define('AffiliateRelationship', {
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
   * Referrer's user ID (FK to users)
   * Example: 2
   */
  referrer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  /**
   * Referred user's user ID (FK to users)
   * Example: 3
   */
  referred_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  /**
   * Level in the affiliate tree (1 = direct, 2 = indirect, ...)
   * Example: 1
   */
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  timestamps: true,
  tableName: 'affiliate_relationships',
});

module.exports = AffiliateRelationship; 