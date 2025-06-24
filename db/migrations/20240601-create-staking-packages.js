module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('staking_packages', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      total_amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      remained: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      affiliate_bonus: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      min_amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      max_amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      daily_return_rate: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      lock_period_days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('staking_packages');
  },
}; 