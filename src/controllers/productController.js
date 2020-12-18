let controller = {};
let models = require('../models');

controller.getProductById = (id) => {
    return models.Product.findOne({
        where: {
            id: id,
        },
        include: [{
            model: models.Category,
        },
        ]
    })
}

module.exports = controller;