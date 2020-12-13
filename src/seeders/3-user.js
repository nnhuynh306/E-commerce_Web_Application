'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var Users = [{
        name: 'thinhnguyenphuc',
        pass: 'abc123',
        email: 'thinhnguyenphuc55@gmail.com',
        address: '414 Duong Ba Trac',
        phoneNumber: "0944779167",
        fullname: 'Nguyen Phuc Thinh'
      }];
      Users.forEach((item, index) => {
          item.createdAt = Sequelize.literal('NOW()');
          item.updatedAt = Sequelize.literal('NOW()');
      });
      return queryInterface.bulkInsert('Users', Users, {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
