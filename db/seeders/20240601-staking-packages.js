module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('staking_packages', [
      {
        name: 'Bronze',
        min_amount: 100,
        max_amount: 999,
        daily_return_rate: 0.0005,
        lock_period_days: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Silver',
        min_amount: 1000,
        max_amount: 9999,
        daily_return_rate: 0.0007,
        lock_period_days: 90,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Gold',
        min_amount: 10000,
        max_amount: 100000,
        daily_return_rate: 0.001,
        lock_period_days: 365,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('staking_packages', null, {});
  },
}; 