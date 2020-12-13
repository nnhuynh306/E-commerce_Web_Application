'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var ProductAttributes = [{
          ProductId:1,
          name: 'sadfasf'
      },{
        ProductId:1,
          name: 'asdfasdf'
      },{
        ProductId:2,
          name: 'asdfasdf'
      },{
        ProductId:3,
          name: 'sadfasdf'
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