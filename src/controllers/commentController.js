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



module.exports = controller