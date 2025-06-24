module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('staking_packages', [
      {
        name: 'Bronze',
        min_amount: 100.0,
        max_amount: 999.0,
        daily_return_rate: 0.002,
        lock_period_days: 30,
        price: 1.0,
        total_amount: 10000.0,
        remained: 8000.0,
        affiliate_bonus: 1.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Silver',
        min_amount: 1000.0,
        max_amount: 9999.0,
        daily_return_rate: 0.007,
        lock_period_days: 90,
        price: 10.0,
        total_amount: 50000.0,
        remained: 40000.0,
        affiliate_bonus: 5.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gold',
        min_amount: 10000.0,
        max_amount: 100000.0,
        daily_return_rate: 0.01,
        lock_period_days: 365,
        price: 100.0,
        total_amount: 100000.0,
        remained: 90000.0,
        affiliate_bonus: 10.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('staking_packages', null, {});
  },
}; 