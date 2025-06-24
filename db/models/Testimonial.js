const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

/**
 * Testimonial Model
 * Represents a user testimonial/quote for GreenDash.
 *
 * Example:
 * {
 *   id: 1,
 *   name: 'Alice',
 *   avatar: 'https://cdn.com/alice.png',
 *   quote: 'GreenDash changed the way I commute!',
 *   duration: '6 months',
 *   createdAt: '2024-06-01T12:00:00Z',
 *   updatedAt: '2024-06-01T12:00:00Z'
 * }
 */
const Testimonial = sequelize.define('Testimonial', {
  /**
   * Auto-incrementing primary key
   */
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  /**
   * Name of the person giving the testimonial
   */
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  /**
   * Avatar image URL (optional)
   */
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  /**
   * The testimonial text/quote
   */
  quote: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  /**
   * Duration of experience (e.g., '6 months')
   */
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'testimonials',
});

module.exports = Testimonial; 