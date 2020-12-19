const express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
var orderController = require('../controllers/orderController')
const user = require('../models/user')
router.use(express.static('../public'))

function getData(res, req) {
    return new Promise((resolve, reject)=> {
        orderController.getCompleteOrdersOfUser(req.session.user.id).then(orders => {
            res.locals.completeOrders = orders;
            orderController.getUncompleteOrdersOfUser(req.session.user.id).then(orders => {
                res.locals.deliverOrders = orders;
                resolve();
            })
        })

    })
}

router.get('/',userController.isLoggedIn, (req, res) => {

    res.locals.epMessage = req.query.epMessage;
    res.locals.epMessageType = req.query.epMessageType;
    res.locals.cpMessage = req.query.cpMessage;
    res.locals.cpMessageType = req.query.cpMessageType;
    
    //get first active tab
    var firstActive = req.query.firstActive;
    var activeTabClass = "active_"
    if (firstActive == null) {
        activeTabClass = activeTabClass + "edit_profile";
    } else {
        activeTabClass = activeTabClass + firstActive;
    }
    res.locals[activeTabClass] = "show active";

    //get orders data
    getData(res, req).then(()=> {
        res.render('my_profile')
    })

})

router.post('/',userController.isLoggedIn, (req, res) => {
  
})

router.post('/edit_profile',userController.isLoggedIn, (req, res) => {
    var fullName = req.body.fullName;
    var phoneNumber = req.body.phoneNumber;
    var address = req.body.address;
    var email = req.body.email;

    var user = {
        id: req.session.user.id,
        phoneNumber: phoneNumber,
        fullName: fullName,
        address: address,
    }

    if (email == req.session.user.email) {
        userController.updateUserProfile(user)
                .then(upUser => {
                    if (upUser) {
                        req.session.user.phoneNumber = phoneNumber;
                        req.session.user.address = address;
                        req.session.user.fullName = fullName;
                        req.session.user.email = email;

                        var message = "Thông tin tài khoản đã được lưu"
                        return res.redirect(`/my_profile?firstActive=edit_profile&epMessage=${message}&epMessageType=primary`)
                    } else {
                        var message = "Không thể lưu thông tin tài khoản"
                        return res.redirect(`/my_profile?firstActive=edit_profile&epMessage=${message}&epMessageType=danger`)
                    }
                })
    } else{
        userController.getUserByEmail(email)
        .then((gUser) => {
            if (gUser) {
                var message = "Email đã được sử dụng cho tài khoản khác"
                return res.redirect(`/my_profile?firstActive=edit_profile&epMessage=${message}&epMessageType=danger`)
            }

            userController.updateUserProfile(user)
                .then(upUser => {
                    if (upUser) {
                        req.session.user.phoneNumber = phoneNumber;
                        req.session.user.address = address;
                        req.session.user.fullName = fullName;
                        req.session.user.email = email;

                        var message = "Thông tin tài khoản đã được lưu"
                        return res.redirect(`/my_profile?firstActive=edit_profile&epMessage=${message}&epMessageType=primary`)
                    } else {
                        var message = "Không thể lưu thông tin tài khoản"
                        return res.redirect(`/my_profile?firstActive=edit_profile&epMessage=${message}&epMessageType=danger`)
                    }
                })
        })
    }

    
})

router.post('/change_pass',userController.isLoggedIn, (req, res) => {
    var oldPass = req.body.oldPass;
    var newPass = req.body.newPass;
    var reNewPass = req.body.reNewPass;

    if (newPass.length < 3) {
        var message = "Mật khẩu mới phải có độ dài lớn hơn 3"
        return res.redirect(`/my_profile?firstActive=security&cpMessage=${message}&cpMessageType=danger`);
    }

    userController.getUserByUsername(req.session.user.name)
        .then(gUser => {
            if (gUser) {
                if (userController.comparePassword(oldPass, gUser.pass)) {

                    if (newPass === reNewPass) {
                        userController.changeUserPassword(gUser.id, newPass)
                            .then(cUser => {
                                if (cUser) {
                                    var message = "Mật khẩu thay đổi thành công"
                                    return res.redirect(`/my_profile?firstActive=security&cpMessage=${message}&cpMessageType=primary`);
                                } else {
                                    var message = "Không thể thay đổi mật khẩu"
                                    return res.redirect(`/my_profile?firstActive=security&cpMessage=${message}&cpMessageType=danger`);
                                }
                            })
                    } else {
                        var message = "Mật khẩu nhập lại không trùng khớp với mật khẩu mới"
                        return res.redirect(`/my_profile?firstActive=security&cpMessage=${message}&cpMessageType=danger`);
                    }

                } else {
                    var message = "Mật khẩu cũ không đúng"
                    return res.redirect(`/my_profile?firstActive=security&cpMessage=${message}&cpMessageType=danger`);
                }
            } else {
                var message = "Không thể thay đổi mật khẩu. Vui lòng đăng nhập lại để tiếp tục"
                return res.redirect(`/my_profile?firstActive=security&cpMessage=${message}&cpMessageType=danger`);
            }
        })
    
})

router.get('/order_detail', userController.isLoggedIn, (req, res) => {
    var orderId = req.query.id;
    orderController.getOrderIncludeDetail(orderId).then(order => {
        if (order) {
            if (order.UserId === req.session.user.id) {
                order.OrderDetails.forEach(detail => {
                    detail.totalPrice = detail.Product.price * detail.productQuantity;
                });
                res.locals.order = order;
                res.render('order_detail')
            } else {
                res.locals.message = "Đơn đặt hàng này không thuộc về bạn"
                res.render('order_detail')
            }
        } else {
            res.locals.message = "Đơn đặt hàng không tồn tại"
            res.render('order_detail')
        }
    })
})


module.exports = router