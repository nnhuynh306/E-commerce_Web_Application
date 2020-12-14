const express = require('express')
var router = express.Router()
const commentController = require('./../controllers/commentController');

router.post('/', function(req, res) {
    let rating = parseInt(req.body.rating);
    let comment = req.body.comment;
    let productID = parseInt(req.body.productID);
    let userID = parseInt(req.session.user.id);
    commentController.insertComment(userID, productID, rating, comment)
    res.redirect('product-detail');
});

module.exports = router