'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var OrderDetails = [{
        productQuantity: 10
      },{
        productQuantity: 10
      },{
        productQuantity: 10
      },{
        productQuantity: 10
      },{
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