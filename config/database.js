require('dotenv').config();
const { Sequelize } = require('sequelize');

// Export a Sequelize instance for app runtime
const sequelize = new Sequelize({
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || null,
  database: process.env.DB_NAME || 'greendash',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql',
});

module.exports = sequelize;

// module.exports = {
//   username: process.env.DB_USER || 'root',
//   password: process.env.DB_PASS || null,
//   database: process.env.DB_NAME || 'greendash',
//   host: process.env.DB_HOST || '127.0.0.1',
//   port: process.env.DB_PORT || 3306,
//   dialect: 'mysql',
// }; 


// module.exports = {
//     username: process.env.DB_USER || 'root',
//     password: process.env.DB_PASS || null,
//     database: process.env.DB_NAME || 'greendash',
//     host: process.env.DB_HOST || '127.0.0.1',
//     port: process.env.DB_PORT || 3306,
//     dialect: 'mysql',
// }; 