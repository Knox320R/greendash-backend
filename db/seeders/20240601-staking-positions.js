module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('staking_positions', [
      {
        user_id: 2, // Alice
        package_id: 1, // Bronze
        amount: 200,
        start_date: new Date('2024-06-01T12:00:00Z'),
        end_date: new Date('2025-06-01T12:00:00Z'),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('staking_positions', null, {});
  },
}; 