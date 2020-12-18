const express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
const user = require('../models/user')
router.use(express.static('../public'))

router.get('/',userController.isLoggedIn, (req, res) => {

    res.locals.epMessage = req.query.epMessage;
    res.locals.epMessageType = req.query.epMessageType;

  
    var firstActive = req.query.firstActive;
    var activeTabClass = "active_"
    if (firstActive == null) {
        activeTabClass = activeTabClass + "edit_profile";
    } else {
        activeTabClass = activeTabClass + firstActive;
    }
    res.locals[activeTabClass] = "show active";
    res.render('my_profile')
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
        userController.updateUser(user)
                .then(upUser => {
                    if (upUser) {
                        req.session.user.phoneNumber = phoneNumber;
                        req.session.user.address = address;
                        req.session.user.fullName = fullName;
                        req.session.user.email = email;
                        
                        var message = "Thông tin tài khoản đã được lưu"
                        return res.redirect(`/my_profile?fistActive=edit_profile&epMessage=${message}&epMessageType=primary`)
                    } else {
                        var message = "Không thể lưu thông tin tài khoản"
                        return res.redirect(`/my_profile?fistActive=edit_profile&epMessage=${message}&epMessageType=danger`)
                    }
                })
    } else{
        userController.getUserByEmail(email)
        .then((gUser) => {
            if (gUser) {
                var message = "Email đã được sử dụng cho tài khoản khác"
                return res.redirect(`/my_profile?fistActive=edit_profile&epMessage=${message}&epMessageType=danger`)
            }

            userController.updateUser(user)
                .then(upUser => {
                    if (upUser) {
                        req.session.user.phoneNumber = phoneNumber;
                        req.session.user.address = address;
                        req.session.user.fullName = fullName;
                        req.session.user.email = email;

                        var message = "Thông tin tài khoản đã được lưu"
                        return res.redirect(`/my_profile?fistActive=edit_profile&epMessage=${message}&epMessageType=primary`)
                    } else {
                        var message = "Không thể lưu thông tin tài khoản"
                        return res.redirect(`/my_profile?fistActive=edit_profile&epMessage=${message}&epMessageType=danger`)
                    }
                })
        })
    }

    
})



module.exports = router