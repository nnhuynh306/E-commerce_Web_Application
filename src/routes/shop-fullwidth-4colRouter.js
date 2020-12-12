const express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('shop-fullwidth-4col')
});


module.exports = router