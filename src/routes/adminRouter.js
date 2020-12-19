const express = require('express');
var router = express.Router()
let userController = require('../controllers/userController')

router.get('/', function (req, res) {
    res.render("admin", {
        pageStyle: "admin-controller",
        product_find_result: {
            product_name_result: "Nước rửa tay con mèo vằn",
            stock_result: 69,
            price_result: 99.8,
            category_result: "Nước hoa",
            description_result: "Hương thơm ngào ngạt toát ra làm tôi thấy vui vẻ"
        },

    })
});

module.exports = router