const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * ReferralBonus Model
 * Tracks bonuses paid out to referrers in the affiliate system.
 *
 * Example:
 * {
 *   id: 1,
 *   user_id: 2, // Referrer (FK to users)
 *   referred_user_id: 3, // The user who triggered the bonus (FK to users)
 *   level: 1, // Level in the affiliate tree
 *   amount: 2.50, // Bonus amount
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const ReferralBonus = sequelize.define('ReferralBonus', {
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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  /**
   * The user who triggered the bonus (FK to users)
   * Example: 3
   */
  referred_user_id: {
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
  },
  /**
   * Bonus amount
   * Example: 2.50
   */
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'referral_bonuses',
});

module.exports = ReferralBonus; 