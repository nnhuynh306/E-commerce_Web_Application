const express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('cart')
});

router.get('/demo', function(req, res) {
    res.render('cart', {
        user: {login: true}
    })
});

module.exports = router