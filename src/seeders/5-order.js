'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      var Orders = [{
          UserId:1,
          address: '414 Duong Ba Trac',
          totalPrice: 3000000,
          state: 'Đang vận chuyển'
      },{
            UserId:1,
          address: '100 Duong Ba Trac',
          totalPrice: 4500000,
          state: 'Đang vận chuyển'
      },{
            UserId:1,
          address: '300 Duong Ba Trac',
          totalPrice: 345600,
          state: 'Đã giao'
      },{
            UserId:1,
          address: '200 Duong Ba Trac',
          totalPrice: 456456456,
          state: 'Đang vận chuyển'
      },{
            UserId:1,
          address: '1000 Duong Ba Trac',
          totalPrice: 7897455543,
          state: 'Đã giao'
    }
    ];
      Orders.forEach((item, index) => {
          item.createdAt = Sequelize.literal('NOW()');
          item.updatedAt = Sequelize.literal('NOW()');
      });
      return queryInterface.bulkInsert('Orders', Orders, {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Orders', null, {});
  }
};