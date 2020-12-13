let controller = {};
let models = require('../models');

controller.getProductByCategory = (CategoryId) => {
    return models.Product.findAll({
        where: {
            CategoryId: CategoryId,
        },
    })
}
controller.getAll = () => {
    return models.Product.findAll({
    })
}

module.exports = controller;