const express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
var productController = require('../controllers/productController');
var orderController = require('../controllers/orderController');

router.get('/', userController.isLoggedIn, (req, res) => {
    var cart = req.session.cart;
    res.locals.items = cart.generateArray();
    res.locals.totalPrice = cart.getTotalPrice();
    res.locals.subTotalPrice = cart.getSubTotalPrice();
    res.locals.discount = parseInt(cart.discount * 100);
    res.locals.couponMessage = req.query.couponMessage;
    res.locals.couponMessageColor = req.query.couponMessageColor;
    res.locals.error = req.query.error;
    res.render('cart')
});

router.post('/',userController.isLoggedIn, (req, res) => {
    var productId = req.body.id;
    var quantity = req.body.quantity;

    if (quantity === "0") {
        res.sendStatus(501);
        res.end;
    }
    
    productController.getProductById(productId).then(product => {
        if (product) {
            var addProduct = req.session.cart.add(product, productId, quantity);  

            if (addProduct) {
                res.sendStatus(204);
                res.end();
            } else {
                res.sendStatus(501);
                res.end();
            }
        } 
        else {
            res.sendStatus(503);
            res.end();
        }
    })
})

router.delete('/', userController.isLoggedIn, (req, res) => {
    if (req.body.deleteAll) {
        req.session.cart.empty();
        res.sendStatus(204);
        res.end();
    } else {
        var productId = req.body.id;
        req.session.cart.remove(productId);
        res.sendStatus(204);
        res.end();
    }
})

router.put('/', userController.isLoggedIn, (req, res) => {
    var productId = req.body.id;
    var quantity = parseInt(req.body.quantity);
    var updateItem = req.session.cart.update(productId, quantity);

    if (updateItem) {
        res.sendStatus(204);
        res.end();
    } else {
        res.locals.error = `Sản phẩm $`
    }
})

router.get('/checkout',userController.isLoggedIn, (req, res) => {
    var nextURL = req.query.nextURL;
    
    var cart = req.session.cart;

    if (cart.isEmpty()) {
        return res.redirect(`/cart?error= Giỏ hàng trống`);
    }

    res.locals.infoErrorMessage = req.query.infoErrorMessage;

    res.locals.items = cart.generateArray();
    res.locals.totalPrice = cart.getTotalPrice();
    res.locals.subTotalPrice = cart.getSubTotalPrice();
    res.locals.discount = parseInt(cart.discount * 100);
    res.locals.couponMessage = req.query.couponMessage;
    res.locals.couponMessageColor = req.query.couponMessageColor;
    res.locals.userFullName = req.session.user.fullName;
    res.locals.userPhoneNumber = req.session.user.phoneNumber;
    
    res.render('checkout')
})

router.post('/checkout', userController.isLoggedIn, (req, res) => {
    var nextURL = req.query.nextURL;
    
    var cart = req.session.cart;

    if (cart.isEmpty()) {
        return res.redirect(`/cart?errorCheckoutMessage= Giỏ hàng trống`);
    } 

    res.locals.items = cart.generateArray();
    res.locals.totalPrice = cart.getTotalPrice();
    res.locals.subTotalPrice = cart.getSubTotalPrice();
    res.locals.discount = parseInt(cart.discount * 100);
    res.locals.couponMessage = req.query.couponMessage;
    res.locals.couponMessageColor = req.query.couponMessageColor;
    res.locals.userFullName = req.session.user.fullName;
    res.locals.userPhoneNumber = req.session.user.phoneNumber;

    var address = req.body.shippingAddress;
    var phoneNumber = req.body.phoneNumber;
    var fullName = req.body.fullName;

    //CHECKING ERRORs

    if (address.length == 0) {
        return res.redirect('/cart/checkout?infoErrorMessage=Địa chỉ giao hàng không được để trống')
    }
    if (phoneNumber.length == 0) {
        return res.redirect('/cart/checkout?infoErrorMessage=Số điện thoại không được để trống')
    }
    if (fullName.length == 0) {
        return res.redirect('/cart/checkout?infoErrorMessage=Họ và tên không được để trống')
    }
    
    var order = {
        address: address,
        note: req.body.note,
        phoneNumber: phoneNumber,
        fullName: fullName,
        totalPrice: cart.getTotalPrice(),
        state: "Đang giao",
        UserId: req.session.user.id,
    }

    cart.checkAndUpdateStock(res);

    orderController.saveOrder(cart, order, () => {
        res.redirect('/cart/checkout/confirm');
    })
    
})

router.post('/coupon',userController.isLoggedIn, (req, res , next) => {
    if (req.session.user) {
        var cart = req.session.cart;
        var code = req.body.discountCode;
        cart.applyCoupon(req, res, code);
    } else {
        next();
    }
})

router.get('/checkout/confirm',userController.isLoggedIn, (req, res) => {
    res.render('checkout_confirm')
})

module.exports = router