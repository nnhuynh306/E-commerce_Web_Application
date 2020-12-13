const express = require('express')
var router = express.Router()

router.post('/', function(req, res) {
    let rating = req.body.rating;
    let comment = req.body.comment;
    console.log('Rating: ', rating);
    console.log('Text: ', comment);
    res.render('product-detail')
});

module.exports = router