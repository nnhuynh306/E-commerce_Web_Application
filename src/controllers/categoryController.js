let controller = {};
let models = require('../models');

controller.getProductByCategory = (CategoryId) => {
    return models.Product.findAll({
        where: {
            CategoryId: CategoryId,
        },
        include: [{
            model: models.Category,
            attributes:['name']
       }]
    })
}
controller.getAll = () => {
    return models.Product.findAll({
        include: [{
            model: models.Category,
            attributes:['name']
       }]
    })
}

module.exports = controller;