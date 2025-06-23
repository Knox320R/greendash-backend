module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('activities', [
      {
        user_id: 2, // Alice
        action: 'stake_created',
        details: JSON.stringify({ amount: 200, package: 'Bronze' }),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});
  },
}; 