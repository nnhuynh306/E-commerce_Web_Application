var models = require('../models')
const { Op } = require("sequelize");
const sequelize = require('sequelize');

let controller = {};

controller.saveOrder = (cart, order, next) => {
    models.Order.create(order)
        .then((newOrder) => {
            var items = cart.generateArray();
            items.forEach((item)=> {
                var orderDetail = {
                    productQuantity: item.quantity,
                    // productAttribute:
                    ProductId: item.item.id,
                    OrderId: newOrder.id
                }

                models.OrderDetail.create(orderDetail);
            })

            if (cart.couponCheck) {
                cart.applyDiscountDatabase().then(()=> {
                    cart.empty();
                    next();
                });
            }
    
        })
}

controller.getCompleteOrdersOfUser = (UserId) => {
    return models.Order.findAll({
        // attributes: [
        //     'id',
        //     [sequelize.fn('date_format', sequelize.col('createdAt'), '%Y-%m-%d'), 'createdAt'],
        //     'address',
        //     'note',
        //     'fullName',
        //     'phoneNumber',
        //     'totalPrice',
        //     'state',
        //     'deliveryDate',
        // ],
        where: {
            UserId: UserId,
            state: {
                [Op.iLike]: '%Đã giao',
            }
        },
        order: [["createdAt", 'DESC']]
    })
}

controller.getUncompleteOrdersOfUser = (UserId) => {
    return models.Order.findAll({
        where: {
            UserId: UserId,
            state: {
                [Op.notILike]: '%Đã giao',
            }
        },
        order: [["createdAt", 'DESC']]
    })
}

controller.getOrderIncludeDetail = (id) => {
    return models.Order.findOne({
        where: {
            id: id,
        },
        include: {
            model: models.OrderDetail,
            include: {
                model: models.Product,
            }
        }
    })
}

module.exports = controller;