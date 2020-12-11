'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var Comments = [{
          text: 'Great',
          rating:5
      },{
          text: 'Good',
          rating:4
      },{
          text: 'Normal',
          rating:3
      },{
          text: 'Bad',
          rating:2
      },{
        text: 'Terrible',
        rating:1
    }
    ];
      Comments.forEach((item, index) => {
          item.createdAt = Sequelize.literal('NOW()');
          item.updatedAt = Sequelize.literal('NOW()');
      });
      return queryInterface.bulkInsert('Comments', Comments, {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};