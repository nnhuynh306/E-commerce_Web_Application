'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productAttributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'product',
            key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productAttributes');
  }
};