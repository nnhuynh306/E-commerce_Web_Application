'use strict';
var models = require('../models')
var Coupon = models.Coupon;
var url = require('url')

//downloaded from: https://drive.google.com/drive/folders/1f3ZEn0Lv80syXtTk6jkLIjO31-W_nbv9
//created by: ThS. Trần Thị Bích Hạnh
//modified by: Huỳnh Nhật Nam

module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.couponCheck = oldCart.couponCheck || false;
    this.discount = oldCart.discount || 0;
    this.couponID = oldCart.couponID || 0;
    this.afterUse = oldCart.afterUse || 0;

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

        var newQuantity = storedItem.quantity + parseInt(quantity);
        if (newQuantity > item.stock) {
            return null;
        }
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
            if (quantity > storedItem.item.stock) {
                return null;
            }
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
                    this.afterUse = coupon.useNumber + 1;
                    this.discount = coupon.discount;
                    this.couponID = coupon.id;
                    this.couponCheck = true;
                    res.redirect(url.format({
                        pathname: req.query.nextURL,
                        query: {
                            "couponMessageColor": "primary",
                            "couponMessage": "Phiếu giảm giá đã được áp dụng"
                        }
                    }))
                } else {
                    res.redirect(url.format({
                        pathname: req.query.nextURL,
                        query: {
                            "couponMessageColor": "danger",
                            "couponMessage": "Phiếu giảm giá đã hết số lần sử dụng",
                        }
                    }))
                }
                // if (this.couponCheck) {
                //     models.Coupon.update({
                //         useNumber: this.preUseNumber,
                //     },
                //     {
                //         where: {
                //             id: this.couponID,
                //         }
                //     }).then(()=> {
                //         this.discount = coupon.discount;
                //         this.couponID = coupon.id;
                //         this.preUseNumber = coupon.useNumber;
                //         models.Coupon.update({
                //                 useNumber: afterUse,
                //             },
                //             {
                //                 where: {
                //                     id: coupon.id,
                //                 }
                //             }).then(()=> {
                //                 this.couponCheck = true;
                //                 res.redirect(url.format({
                //                 pathname: req.query.nextURL,
                //                 query: {
                //                     "couponMessageColor": "primary",
                //                     "couponMessage": "Phiếu giảm giá đã được áp dụng"
                //                 }
                //                 }))
                //             })
                //     })
                // } else {
                //     this.discount = coupon.discount;
                //     this.couponID = coupon.id;
                //     this.preUseNumber = coupon.useNumber;
                //     models.Coupon.update({
                //             useNumber: afterUse,
                //         },
                //         {
                //             where: {
                //                 id: coupon.id,
                //             }
                //         }).then(()=> {
                //             this.couponCheck = true;
                //             res.redirect(url.format({
                //             pathname: req.query.nextURL,
                //             query: {
                //                 "couponMessageColor": "primary",
                //                 "couponMessage": "Phiếu giảm giá đã được áp dụng"
                //             }
                //             }))
                //         })
                // }
            } else {
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

    this.applyDiscountDatabase = () => {
        return models.Coupon.update({
                useNumber: this.afterUse,
            },
            {
                where: {
                    id: this.couponID,
                }
            })
    }

    //if new quantity = 0 remove from cart
    this.applyNewQuantity = (id, newQuantity) => {
        var storedItem = this.items[id];
        if (storedItem) {
            if (newQuantity >= 1) {
                storedItem.quantity = newQuantity;
            } else {
                this.remove(id);
            }
        }
    }

    this.getAllProductInDatabase = () => {
        var array = [];
        this.generateArray().forEach(item => {
            array.push(models.Product.findOne({
                where: {
                    id: item.item.id,
                }
            }))
        });
        return Promise.all(array)
    }

    this.checkAndUpdateStock = (res) => {
        this.getAllProductInDatabase().then(products => {
            var error = `| `;
            products.forEach(product => {
                var checkItem = this.items[product.id];
                if (checkItem) {
                    if (product.stock == 0) {
                        error += `${product.name} hết hàng, xóa sản phẩm khỏi giỏ hàng | `;
                        this.remove(product.id);
                    } else if (product.stock < checkItem.quantity) {
                        error += `${product.name} không đủ hàng, giảm số lượng thành ${product.stock} | `;
                        checkItem.quantity = product.stock;
                    }
                }
            })

            if (error.length > 2) {
                error = error.replace(/&/g, '%26')
                res.redirect(`/cart?error=${error}`);
            } else {
                products.forEach(product => {
                    var newStock = product.stock - this.items[product.id].quantity;
                    if (newStock < 0) {
                        res.redirect(`/cart?error=Một lỗi không mong muốn đã xảy ra. Xin hãy thử lại`);
                    }
                    models.Product.update({
                        stock: newStock,
                    },
                    {
                        where: {
                            id: product.id,
                        }
                    })
                })
            }
        })
    }
};