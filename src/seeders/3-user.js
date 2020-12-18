'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var Users = [{
        name: 'admin',
        pass: '$2y$12$rm5InTT7CQxWD94BDXqXMOcLEyEM6yRTP1.XYr6oWnMVKGysNLo/W',
        email: 'thinhnguyenphuc55@gmail.com',
        address: '414 Duong Ba Trac',
        phoneNumber: "0944779167",
        fullName: 'Admin',
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
