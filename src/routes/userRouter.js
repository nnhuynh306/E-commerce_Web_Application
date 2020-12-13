const express = require('express');
var router = express.Router()
let userController = require('../controllers/userController')

router.get('/login', function(req, res) {
    if (userController.isLoggedIn(req)) {
        res.redirect('/')
    } else {
        res.render('login')
    }
});

router.post('/login', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    userController
        .getUserByUsername(username)
        .then(user => {
            if (user) {
                if (userController.comparePassword(password, user.pass)) {
                    req.session.user = user;
                    res.redirect('/');
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
    if (userController.isLoggedIn(req)) {
        res.redirect('/')
    } else {
        res.render('sign_up')
    }
});

router.post('/signup', function(req, res, next) {
    let  email  =  req.body.email;
    let  name =  req.body.username;
    let   pass = req.body.password;
 
    let confirmPassword = req.body.confirmPassword

    //kiem tra confirmPassword

    if (pass != confirmPassword) {
        return res.render('sign_up', {message: "Mật khẩu nhập lại không đúng"})
    }

    //kiem tra username chua ton tai
    userController
        .getUserByUsername(name)
        .then(user => {
            if (user) {
                return res.render('sign_up', {
                    message: `Username ${name} is already taken. Please choose another one`,
                    type: 'danger'
                })
            }
            user = {
                email: email,
                name: name,
                pass: pass
            }
            return userController
                .createUser(user)
                .then(user => {
                    res.render('login', {
                        message: 'You have signed up.',
                        type: 'primary',
                    })
                });
        })
        .catch(error => {
            next(error);
        })
});

router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            req.user
            return next(error);
        } else {
            return res.redirect('/user/login')
        }
    })
})


router.get('/forgotpass', function(req, res) {
    res.render('forgot_pass')
});

module.exports = router