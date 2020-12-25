const express = require('express');
var router = express.Router()
let userController = require('../controllers/userController')

router.get('/login', function(req, res) {
    if (req.session.user) {
        res.redirect('/')
    } else {
        req.session.nextURL = req.query.nextURL;
        res.render('login')
    }
});

router.post('/login', (req, res, next) => {
    if (req.session.user) {
        return res.render('login', {
            message: 'Bạn đang đăng nhập bằng một tài khoản khác',
            type: 'danger'
        })
    }

    let username = req.body.username;
    let password = req.body.password;

    userController
        .getUserByUsernameOrEmail(username)
        .then(user => {
            if (user) {
                if (userController.comparePassword(password, user.pass)) {
                    req.session.user = user;
                    if (req.session.nextURL) {
                        res.redirect(req.session.nextURL);
                    } else{
                        res.redirect('/');
                    }
                   
                } else {
                    res.render('login', {
                        message: 'Mật khẩu sai',
                        type: 'danger'
                    })
                }     
            } else {
                res.render('login', {
                    message: 'Tên đăng nhập không tồn tại',
                    type: 'danger',
                })
            }
        })

})

router.get('/signup', function(req, res) {
    if (req.session.user) {
        res.redirect('/')
    } else {
        req.session.nextURL = req.query.nextURL;
        res.render('sign_up')
    }
});

router.post('/signup', function(req, res, next) {
    let email  =  req.body.email;
    let name =  req.body.username;
    let fullName =  req.body.fullName;
    let pass = req.body.password;
    let confirmPassword = req.body.confirmPassword
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let space = /[  ]/;
    if (format.test(name) || format.test(fullName)) {
        let messageWarning;
        if(format.test(name) ){
            messageWarning = "Tên đăng nhập không được chứa ký tự đặc biệt";
        }else
         if(format.test(fullName)){
             messageWarning = "Họ tên không được chứa ký tự đặc biệt"
        }

        return res.render('sign_up', {
            preEmail: email,
            preName: name,
            prePass: "",
            preRePass: "",
            preFullName: fullName,
            message: messageWarning,
            type: 'danger'
        })
    }

    if(space.test(pass)){
        return res.render('sign_up', {
            preEmail: email,
            preName: name,
            prePass: pass,
            preRePass: confirmPassword,
            preFullName: fullName,
            message: `Mật khẩu không được chứa ký tự khoảng cách`,
            type: 'danger'
        })
    }

    if (email.length ==0) {
        return res.render('sign_up', {
            preEmail: email,
            preName: name,
            prePass: pass,
            preRePass: confirmPassword,
            preFullName: fullName,
            message: `Mail không được để trống`,
            type: 'danger'
        })
    }

    if (name.length ==0) {
        return res.render('sign_up', {
            preEmail: email,
            preName: name,
            prePass: pass,
            preRePass: confirmPassword,
            preFullName: fullName,
            message: `Tên đăng nhập không được để trống`,
            type: 'danger'
        })
    }
    if(fullName.length==0){
        return res.render('sign_up', {
            preEmail: email,
            preName: name,
            prePass: pass,
            preRePass: confirmPassword,
            preFullName: fullName,
            message: `Họ tên không được để trống`,
            type: 'danger'
        })

    }

    if (pass.length < 3) {
        return res.render('sign_up', {
            preEmail: email,
            preName: name,
            prePass: pass,
            preRePass: confirmPassword,
            preFullName: fullName,
            message: `Độ dài mật khẩu phải lớn hơn 3`,
            type: 'danger'
        })
    }

    if (pass != confirmPassword) {
        return res.render('sign_up', {
            preEmail: email,
            preName: name,
            prePass: pass,
            preRePass: confirmPassword,
            preFullName: fullName,
            message: `Mật khẩu nhập lại không trùng khớp`,
            type: 'danger'
        })
    }

    //kiem tra input values


    //kiem tra username chua ton tai
    userController
        .getUserByUsername(name)
        .then(user => {
            if (user) {
                return res.render('sign_up', {
                    preEmail: email,
                    preName: name,
                    prePass: pass,
                    preRePass: confirmPassword,
                    preFullName: fullName,
                    message: `Tên đăng nhập đã tồn tại`,
                    type: 'danger'
                })
            }
            else {
                userController
                    .getUserByEmail(email)
                    .then(user => {
                        if (user) {
                            return res.render('sign_up', {
                                preEmail: email,
                                preName: name,
                                prePass: pass,
                                preRePass: confirmPassword,
                                preFullName: fullName,
                                message: `Email đã được đăng ký bởi một tài khoản khác`,
                                type: 'danger'
                            })
                        }
                        user = {
                            email: email,
                            name: name,
                            pass: pass,
                            fullName: fullName,
                            isAdmin: false
                        }
                        return userController
                            .createUser(user)
                            .then(user => {
                                if (req.session.nextURL) {
                                    res.render('login', {
                                        message: 'Bạn đã đăng ký thành công',
                                        type: 'primary',
                                    })
                                } else {
                                    res.render('login', {
                                        message: 'Bạn đã đăng ký thành công',
                                        type: 'primary',
                                    })
                                }
                            });
                    })
                    .catch(error => {
                        next(error);
                    })
            }
           
        })
        .catch(error => {
            next(error);
        })
});

router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            return next(error);
        } else {
            var nextURL = req.query.nextURL;
            if (nextURL) {
                return res.redirect(`${nextURL}`)
            } else {
                return res.redirect('/user/login')
            }
        }
    })
})


router.get('/forgotpass', function(req, res) {
    res.render('forgot_pass')
});

module.exports = router