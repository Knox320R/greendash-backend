module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('referral_bonuses', [
      {
        user_id: 1, // Admin (referrer)
        referred_user_id: 2, // Alice
        level: 1,
        amount: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('referral_bonuses', null, {});
  },
}; 