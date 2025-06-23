module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        user_id: 2, // Alice
        amount_paid: 100,
        tokens_requested: 1000,
        payment_method: 'stripe',
        status: 'approved',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
}; 