const express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
var productController = require('../controllers/productController');

router.get('/', userController.isLoggedIn, (req, res) => {
    var cart = req.session.cart;
    res.locals.items = cart.generateArray();
    res.locals.totalPrice = cart.getTotalPrice();

    res.render('cart')
});

router.post('/', (req, res) => {
    var productId = req.body.id;
    var quantity = req.body.quantity;

    if (quantity <= 0) {
        res.render('cart');
    }

    productController.getProductById(productId).then(product => {
        if (product) {
            req.session.cart.add(product, productId, quantity);
            res.sendStatus(204);
            res.end();  
        } 
    })
})

router.delete('/', (req, res) => {
    var productId = req.body.id;
    req.session.cart.remove(productId);
    res.sendStatus(204);
    res.end();
})

router.put('/', (req, res) => {
    var productId = req.body.id;
    var quantity = parseInt(req.body.quantity);
    req.session.cart.update(productId, quantity);
    res.sendStatus(204);
    res.end();
})

router.get('/checkout', (req, res) => {
    res.render('checkout')
})

router.post('/coupon', (req, res , next) => {
    if (req.session.user) {
        var cart = req.session.cart;
        var code = req.body.discountCode;
        if (code) {

        }
    } else {
        next();
    }
})

module.exports = router