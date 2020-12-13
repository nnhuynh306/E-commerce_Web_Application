const express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    console.log(req.query.id || 1);
    res.render('product-detail')
});


module.exports = router