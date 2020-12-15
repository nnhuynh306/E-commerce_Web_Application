'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var ProductAttributes = [{
          ProductId:1,
          name: 'Đỏ'
      },{
        ProductId:1,
          name: 'Vàng'
      },{
        ProductId:2,
          name: 'Đen'
      },{
        ProductId:3,
          name: 'Trắng'
      }];
      ProductAttributes.forEach((item, index) => {
          item.createdAt = Sequelize.literal('NOW()');
          item.updatedAt = Sequelize.literal('NOW()');
      });
      return queryInterface.bulkInsert('ProductAttributes', ProductAttributes, {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ProductAttributes', null, {});
  }
};