const controller = {}

const models = require('../models');
const Op = require('sequelize').Op;

controller.getProductComment = (productID) => {
    return models.Comment.findAll({
        where: {
            ProductId: productID
        },
        include: [{
            model: models.User,
            attributes:['name']
       }]
    });
};

controller.insertComment = (userID, productID, rate,  cmt) => {
    models.Comment.create({
        text: cmt,
        rating: rate,
        ProductId: productID,
        UserId: userID
    })
};



module.exports = controller