const express = require('express')
var router = express.Router()

router.get('/login', function(req, res) {
    res.render('login')
});

router.get('/signup', function(req, res) {
    res.render('sign_up')
});

router.get('/forgotpass', function(req, res) {
    res.render('forgot_pass')
});

module.exports = router