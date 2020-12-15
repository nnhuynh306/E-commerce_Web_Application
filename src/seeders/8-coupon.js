'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var Coupons = [{
      code:"TEST-COUPON1",
      discount:0.1,
      useNumber: 0,
      maxUseNumber: 100,
    },{
      code:"TEST-COUPON2",
      discount:0.2,
      useNumber: 0,
      maxUseNumber: 3,
    }
  ];
    Coupons.forEach((item, index) => {
        item.createdAt = Sequelize.literal('NOW()');
        item.updatedAt = Sequelize.literal('NOW()');
    });
    return queryInterface.bulkInsert('Coupons', Coupons, {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Coupons', null, {});
  }
};
