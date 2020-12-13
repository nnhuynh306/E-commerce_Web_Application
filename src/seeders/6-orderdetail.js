'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var OrderDetails = [{
        OrderId:1,
        ProductId:1,
        productQuantity: 10
      },{
        OrderId:2,
        ProductId:2,
        productQuantity: 10
      },{
        OrderId:3,
        ProductId:3,
        productQuantity: 10
      },{
        OrderId:4,
        ProductId:5,
        productQuantity: 10
      },{
        OrderId:1,
        ProductId:3,
        productQuantity: 10
    }
    ];
      OrderDetails.forEach((item, index) => {
          item.createdAt = Sequelize.literal('NOW()');
          item.updatedAt = Sequelize.literal('NOW()');
      });
      return queryInterface.bulkInsert('OrderDetails', OrderDetails, {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('OrderDetails', null, {});
  }
};