const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        name: 'Alice',
        email: 'alice@greendash.com',
        password: await bcrypt.hash('a', 10),
        avatar: null,
        wallet_address: null,
        referral_code: 'ALICE001',
        role: 'user',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Bob',
        email: 'bob@greendash.com',
        password: await bcrypt.hash('a', 10),
        avatar: null,
        wallet_address: null,
        referral_code: 'BOB001',
        role: 'user',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('users', users);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {
      email: ['alice@greendash.com', 'bob@greendash.com'],
    });
  },
}; 