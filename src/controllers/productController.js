let controller = {};
let models = require('../models');
let Product = models.Product;

controller.getProductById = (id) => {
    return Product.findOne({
        where: {
            id: id,
        }
    })
}

module.exports = controller;