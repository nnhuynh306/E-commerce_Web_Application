'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productQuantity: {
        type: Sequelize.INTEGER
      },
      productAttribute: {
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
      OrderId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Orders',
            key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
     },
     ProductId: {
      type: Sequelize.INTEGER,
      references: {
          model: 'Products',
          key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderDetails');
  }
};