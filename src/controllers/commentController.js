const controller = {}

const models = require('../models');
const Op = require('sequelize').Op;

controller.getAll = (userID, productID) => {
    models.Comment.findAll({
        where: {
            [Op.and]: [
                {
                    UserId: {
                        [Op.eq]: userID
                    }
                },
                {
                    ProductId: {
                        [Op.eq]: productID
                    }
                },
            ]
        },
    }).then(data => {
        return data.Comment
    })
}



module.exports = controller