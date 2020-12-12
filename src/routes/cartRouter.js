const express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    if (req.session.user) {
        res.render('cart')
    } else {
        res.redirect('/user/login')
    }
});

module.exports = router