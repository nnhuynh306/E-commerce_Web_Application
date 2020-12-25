const express = require('express');
var router = express.Router()
let userController = require('../controllers/userController')
const productController = require('./../controllers/productController')

router.get('/',userController.isAdmin, function (req, res) {
    res.render("admin", {
        pageStyle: "admin-controller",
        // product_find_result: {
        //     product_name_result: "Nước rửa tay con mèo vằn",
        //     stock_result: 69,
        //     price_result: 99.8,
        //     category_result: "Nước hoa",
        //     description_result: "Hương thơm ngào ngạt toát ra làm tôi thấy vui vẻ"
        // },
        // product_edit_error: true;
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
        ],
    })
});


router.post('/remove-product',userController.isAdmin, function(req, res) {
    let product_id = req.body.product_id;
    productController.removeProductByID(product_id)
    .then(function(){
        res.send("Successfully");
    })
    .catch(function(error){
        res.send(error);
    })

});


router.post('/edit-product-find', userController.isAdmin, function(req, res){
    let product_id = req.body.product_id;
    productController.getProductById(product_id)
    .then(data => {
        let product_find_result = {
            product_name_result: data.name,
            stock_result: data.stock,
            price_result: data.price,
            category_result: data.Category.name,
            categodyID_result: data.CategoryId,
            description_result: data.description,
            bigImagePath_result: data.bigImagePath,
            smallImagePath_result: data.smallImagePath,
            id_result: data.id
        }
        res.render("admin", {
            pageStyle: "admin-controller",
            active_edit_product: 'show active',
            product_find_result
        })
    })
    .catch(function(error){
        //res.send(error)
        res.render("admin", {
            pageStyle: "admin-controller",
            active_edit_product: 'show active',
            product_edit_error: true,
        })
    })
});


router.post('/edit-product-update',userController.isAdmin, function(req, res){
    let product_edit = {
        name: req.body.product_name_result,
        stock: req.body.stock_result,
        price: req.body.price_result,
        category: req.body.category_result,
        description: req.body.description_result,
        bigImagePath: req.body.bigImagePath_result,
        smallImagePath: req.body.smallImagePath_result,
        id: req.body.id_result,
        CategoryId: req.body.categodyID_result
    };
    console.log(product_edit);
    productController.editProduct(product_edit)
    .then(function() {
        res.send("Successfully")
    })
    .catch(function(error) {
        res.send(error)
    })

})

module.exports = router