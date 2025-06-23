const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('123', 10);
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin User',
        email: 'admin@greendash.com',
        password,
        avatar: null,
        wallet_address: null,
        referral_code: 'ADMIN001',
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { email: 'admin@greendash.com' });
  },
}; 