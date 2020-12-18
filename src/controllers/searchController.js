const controller = {}
const Op = require('sequelize').Op;
const models = require('../models')


controller.findProduct = (text) => {
    text = '%' + text + '%';
    return models.Product.findAll({
        where: {
            [Op.or]: [
                {
                    name: {
                        [Op.like]: text
                    }
                },
                {
                    description: {
                        [Op.like]: text
                    }
                },
                {
                    brand: {
                        [Op.like]: text
                    }
                },
            ]
        },
    });
};


module.exports = controller