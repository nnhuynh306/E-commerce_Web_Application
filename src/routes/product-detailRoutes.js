const express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('product-detail')
});


module.exports = router