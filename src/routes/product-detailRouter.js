const express = require('express')
const controller = require('./../controllers/productController')
var router = express.Router()

router.get('/', function(req, res) {
    var productID = req.query.id || 1;
    res.locals.product = controller.getProductById(productID);
    res.json() = controller.getProductById(productID);
    // res.render('product-detail');
});

module.exports = router