'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      var Comments = [{
            ProductId:1,  
            UserId:1,
          text: 'Great',
          rating:5
      },{
        ProductId:2,  
        UserId:1,
          text: 'Good',
          rating:4
      },{
        ProductId:3,  
        UserId:1,
          text: 'Normal',
          rating:3
      },{
        ProductId:4,  
        UserId:1,
          text: 'Bad',
          rating:2
      },{
        ProductId:5,  
        UserId:1,
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