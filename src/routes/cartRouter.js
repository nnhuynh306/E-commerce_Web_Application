const express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
var productController = require('../controllers/productController')

router.get('/', function(req, res) {
    if (userController.isLoggedIn(req)) {
        // var cart = req.session.cart;
        // res.local.items = cart.generateArray();
        // res.local.totalPrice = cart.totalPrice();

        res.render('cart')
    } else {
        res.redirect('/user/login')
    }
});

router.post('/', (req, res) => {
    var productId = req.body.id;
    var quantity = req.body.quantity;

    if (quantity <= 0) {
        res.render('cart');
    }

    productController.getProductById(productId).then(data => {
        if (data) {
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
    req.sendStatus(204);
    res.end();
})

router.get('/checkout', (req, res) => {
    if (userController.isLoggedIn(req)) {
        res.render('checkout')
    }
})

module.exports = router