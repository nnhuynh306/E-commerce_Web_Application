const express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
var productController = require('../controllers/productController')

router.get('/', function(req, res) {
    if (userController.isLoggedIn(req)) {
        var cart = req.session.cart;
        res.locals.items = cart.generateArray();
        res.locals.totalPrice = cart.getTotalPrice();

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
    console.log(productId);
    var quantity = parseInt(req.body.quantity);
    console.log(quantity);
    req.session.cart.update(productId, quantity);
    res.sendStatus(204);
    res.end();
})

router.get('/checkout', (req, res) => {
    if (userController.isLoggedIn(req)) {
        res.render('checkout')
    }
})

module.exports = router