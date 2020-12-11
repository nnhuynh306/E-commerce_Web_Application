'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderdetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productQuantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'order',
            key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
    await queryInterface.dropTable('orderdetails');
  }
};