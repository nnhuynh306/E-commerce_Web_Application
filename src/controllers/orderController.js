var models = require('../models')

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

            cart.empty();
            next();
        })
}

module.exports = controller;