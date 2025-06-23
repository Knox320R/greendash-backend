module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('affiliate_relationships', [
      {
        referrer_id: 1, // Admin refers Alice
        referred_id: 2,
        level: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        referrer_id: 2, // Alice refers Bob
        referred_id: 3,
        level: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('affiliate_relationships', null, {});
  },
}; 