module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('token_transactions', [
      {
        user_id: 2, // Alice
        type: 'purchase',
        amount: 1000,
        related_id: 1, // order id
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('token_transactions', null, {});
  },
}; 