module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        user_id: 2, // Alice
        amount_paid: 100,
        tokens_requested: 1000,
        payment_method: 'stripe',
        status: 'approved',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
}; 