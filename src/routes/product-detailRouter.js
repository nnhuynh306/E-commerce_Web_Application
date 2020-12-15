const express = require('express')
const controller = require('./../controllers/productController')
const commentController = require('./../controllers/commentController');
const { response } = require('express');
const toColor = require('../utility/colorConverter');
var router = express.Router()

router.get('/', function(req, res) {
    var productID = req.query.id || 1;

    commentController.getProductComment(productID).then(cmt => {
        res.locals.comment = cmt
        controller.getProductById(productID).then(product => {
            colors = [];
            res.locals.product = product;
            for(attr of product.ProductAttributes)
            {
                colors.push({color:toColor(attr.name)});
            }
            res.locals.colors = colors;
            res.render('product-detail');
        })

    });

});

module.exports = router