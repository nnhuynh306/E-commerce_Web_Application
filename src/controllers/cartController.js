'use strict';
var models = require('../models')
var Coupon = models.Coupon;
var url = require('url')

module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.couponCheck = oldCart.couponCheck || false;
    this.discount = oldCart.discount || 0;
    this.couponID = oldCart.counponID || 0;

    this.getTotalQuantity = () => {
        var quantity = 0;
        for (var id in this.items) {
            quantity += parseInt(this.items[id].quantity);
        }
        return quantity;
    };

    this.getSubTotalPrice = () => {
        var price = 0;
        for (var id in this.items) {
            price += parseFloat(this.items[id].price);
        }
        price = parseFloat(price).toFixed(2);
        return price;
    };

    this.getTotalPrice = () => {
        var price = 0;
        for (var id in this.items) {
            price += parseFloat(this.items[id].price);
        }
        if (this.couponCheck) {
            price = parseFloat(price) - (parseFloat(price) * parseFloat(this.discount));
        }
        price = parseFloat(price).toFixed(2);
        return price;
    };

    this.add = (item, id, quantity) => {
        var storedItem = this.items[id];
        if (!storedItem) {
            this.items[id] = { item: item, quantity: 0, price: 0 };
            storedItem = this.items[id];
        }
        storedItem.item.price = parseFloat(storedItem.item.price);
        storedItem.quantity += parseInt(quantity);
        storedItem.price = parseFloat(storedItem.item.price * storedItem.quantity);
        this.totalQuantity = this.getTotalQuantity();
        this.totalPrice = this.getTotalPrice();
        return this.getCartItem(id);
    };

    this.remove = (id) => {
        var storedItem = this.items[id];
        if (storedItem) {
            delete this.items[id];
            this.totalQuantity = this.getTotalQuantity();
            this.totalPrice = this.getTotalPrice();
        }
    };

    this.update = (id, quantity) => {
        var storedItem = this.items[id];
        if (storedItem && quantity >= 1) {
            storedItem.quantity = quantity;
            storedItem.price = parseFloat(storedItem.item.price * storedItem.quantity);
            this.totalQuantity = this.getTotalQuantity();
            this.totalPrice = this.getTotalPrice();
        }
        return this.getCartItem(id);
    };

    this.empty = () => {
        this.items = {};
        this.totalQuantity = 0;
        this.totalPrice = 0;
    };

    this.isEmpty = () => {
        if (this.getTotalQuantity() <= 0) {
            return true;
        } else {
            return false;
        }
    }

    this.generateArray = () => {
        var arr = [];
        for (var id in this.items) {
            this.items[id].item.price = parseFloat(this.items[id].item.price).toFixed(2);
            this.items[id].price = parseFloat(this.items[id].price).toFixed(2);
            arr.push(this.items[id]);
        }
        return arr;
    };

    this.getCart = function() {
        var cart = {
            items: this.generateArray(),
            totalQuantity: this.totalQuantity,
            totalPrice: this.totalPrice,
            address: this.address,
            paymentMethod: this.paymentMethod
        };
        return cart;
    }

    this.getCartItem = function(id) {
        var cartItem = {
            item: this.items[id],
            totalQuantity: this.totalQuantity,
            totalPrice: this.totalPrice,
        }
        return cartItem;
    }

    this.findCoupon = (code) => {
        return Coupon.findOne({
            where: {
                code: code,
            }
        });
    }

    this.applyCoupon = (req, res, code) => {
        this.findCoupon(code).then(coupon => {
            if (coupon) {
                if (coupon.useNumber < coupon.maxUseNumber) {
                    var afterUse = coupon.useNumber + 1;
                    this.discount = coupon.discount;
                    this.couponCheck = true;
                    res.redirect(url.format({
                        pathname: req.query.nextURL,
                        query: {
                            "couponMessageColor": "primary",
                            "couponMessage": "Phiếu giảm giá đã được áp dụng"
                        }
                    }))
                } else {
                    // res.locals.couponMessageColor = "danger";
                    // res.locals.couponMessage = "Phiếu giảm giá đã hết số lần sử dụng";
                    // res.render('cart')
                    res.redirect(url.format({
                        pathname: req.query.nextURL,
                        query: {
                            "couponMessageColor": "danger",
                            "couponMessage": "Phiếu giảm giá đã hết số lần sử dụng",
                        }
                    }))
                }
            } else {
                // res.locals.couponMessageColor = "danger";
                // res.locals.couponMessage = "Phiếu giảm giá không tồn tại";
                // res.render('cart')
                res.redirect(url.format({
                    pathname: req.query.nextURL,
                    query: {
                        "couponMessageColor": "danger",
                        "couponMessage": "Phiếu giảm giá không tồn tại",
                    }
                }))
            }
        })
    }
};