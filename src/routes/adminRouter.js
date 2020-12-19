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
        order_management: [
            {
                "id": 101,
                "customer": "Thinhnguyenphuc",
                "total": 508,
                "state": "Chưa giao hàng"
            },
            {
                "id": 109,
                "customer": "Namhuynhnhat",
                "total": 9669,
                "state": "Đã nhận hàng",
            },
        ],
        user_management: [
            {
                "id": 101,
                "username": "Thinhnguyenphuc"
            },
            {
                "id": 102,
                "username": "Namhuynhnhat"
            },
            {
                "id": 103,
                "username": "Khanhmaidang"
            },
            {
                "id": 104,
                "username": "Duyphamvu47"
            },
            {
                "id": 105,
                "username": "Hoanghuyhonguyen"
            }
        ]  
    })
});

module.exports = router