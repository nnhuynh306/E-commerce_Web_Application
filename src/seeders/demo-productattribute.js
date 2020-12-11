'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var ProductAttributes = [{
          name: 'sadfasf'
      },{
          name: 'asdfasdf'
      },{
          name: 'asdfasdf'
      },{
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