const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const bcrypt = require('bcryptjs');

/**
 * User Model
 * Represents a platform user (regular or admin).
 *
 * Example:
 * {
 *   id: 1,
 *   name: 'Alice',
 *   email: 'alice@greendash.com',
 *   password: '$2a$10$...', // bcrypt hash
 *   avatar: 'https://cdn.com/avatar.png',
 *   wallet_address: '0x1234abcd...',
 *   referral_code: 'ALICE001',
 *   role: 'user',
 *   created_at: '2024-06-01T12:00:00Z',
 *   updated_at: '2024-06-01T12:00:00Z'
 * }
 */
const User = sequelize.define('User', {
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
   * User's display name
   * Example: 'Alice'
   */
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  /**
   * User's email address (unique)
   * Example: 'alice@greendash.com'
   */
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  /**
   * Hashed password (bcrypt)
   * Example: '$2a$10$...'
   */
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  /**
   * Optional avatar URL
   * Example: 'https://cdn.com/avatar.png'
   */
  avatar: DataTypes.STRING,
  /**
   * Wallet address for blockchain integration
   * Example: '0x1234abcd...'
   */
  wallet_address: DataTypes.STRING,
  /**
   * Unique referral code for affiliate system
   * Example: 'ALICE001'
   */
  referral_code: {
    type: DataTypes.STRING,
    unique: true,
  },
  /**
   * User role: 'user' or 'admin'
   * Example: 'user'
   */
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
}, {
  timestamps: true,
  tableName: 'users',
  /**
   * Hooks to hash password before saving
   */
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
  },
});

/**
 * Compare a plain password with the hashed password
 * @param {string} candidatePassword
 * @returns {Promise<boolean>}
 * Usage: await user.comparePassword('plaintext')
 */
User.prototype.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

/**
 * Change the user's password (hashes before saving)
 * @param {string} newPassword
 * Usage: await user.changePassword('newpass')
 */
User.prototype.changePassword = async function (newPassword) {
  this.password = await bcrypt.hash(newPassword, 10);
  await this.save();
};

module.exports = User; 