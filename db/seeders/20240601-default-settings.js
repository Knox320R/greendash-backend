module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('admin_settings', [
      {
        key: 'TOKEN_DAILY_RATE',
        value: '0.0005',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'REFERRAL_BONUS_LEVELS',
        value: JSON.stringify([0.05, 0.03, 0.01]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admin_settings', {
      key: ['TOKEN_DAILY_RATE', 'REFERRAL_BONUS_LEVELS'],
    });
  },
}; 