'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var Categories = [{
          name: 'Nước hoa'
      },{
          name: 'Mỹ phẩm'
      },{
          name: 'Thời trang'
      },{
          name: 'Chăm sóc da'
      }];
      Categories.forEach((item, index) => {
          item.createdAt = Sequelize.literal('NOW()');
          item.updatedAt = Sequelize.literal('NOW()');
      });
      return queryInterface.bulkInsert('Categories', Categories, {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories', null, {});
  }
};