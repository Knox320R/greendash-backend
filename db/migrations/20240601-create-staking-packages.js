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
      min_amount: {
        type: Sequelize.DECIMAL(18, 8),
        allowNull: false,
      },
      max_amount: {
        type: Sequelize.DECIMAL(18, 8),
        allowNull: false,
      },
      daily_return_rate: {
        type: Sequelize.DECIMAL(5, 4),
        allowNull: false,
      },
      lock_period_days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
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