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
controller.isExistID = (id) => {
    return models.Category.count({ where: { id: id } })
      .then(count => {
          console.log(count);
        if (count != 0) {
          return true;
        }
        return false;
    });
}

module.exports = controller;