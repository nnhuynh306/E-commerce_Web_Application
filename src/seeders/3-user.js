'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var Users = [{
        name: 'thinhnguyenphuc',
        pass: '$2y$12$MJHly8VRv4W.WwRkdspB5eH0otvKLT8Eioc7OcEspwXuiSh2HZsNG',
        email: 'thinhnguyenphuc55@gmail.com',
        address: '414 Duong Ba Trac',
        phoneNumber: "0944779167",
        fullName: 'Nguyen Phuc Thinh',
        isAdmin: true
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
