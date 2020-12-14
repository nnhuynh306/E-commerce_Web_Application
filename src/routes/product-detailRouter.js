const express = require('express')
const controller = require('./../controllers/productController')
const commentController = require('./../controllers/commentController');
const { response } = require('express');
var router = express.Router()

router.get('/', function(req, res) {
    var productID = req.query.id || 1;

    commentController.getProductComment(productID).then(cmt => {
        res.locals.comment = cmt
        console.log(cmt)
        controller.getProductById(productID).then(product => {
            res.locals.product = product
            res.render('product-detail');
        })

    });

});

module.exports = router