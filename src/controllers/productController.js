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

controller.removeProductByID = (productID) => {
    return models.Product.destroy(
        {
            where: {id: productID}
        }
    )
};


controller.editProduct = (product) => {
    return models.Product.update({
        name: product.name,
        stock: product.stock,
        brand: product.brand,
        description: product.description,
        price: product.price,
        smallImagePath: product.smallImagePath,
        bigImagePath: product.bigImagePath,
        CategoryId: product.CategoryId
    },
    {
        where: {
            id: product.id
        }
    })
};

module.exports = controller;