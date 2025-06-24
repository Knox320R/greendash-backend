module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('activities', [
      {
        user_id: 2,
        action: 'stake_created',
        details: JSON.stringify({ amount: 200, package: 'Bronze' }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});
  },
}; 