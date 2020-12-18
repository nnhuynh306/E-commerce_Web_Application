const express = require('express')
const controller = require('./../controllers/productController')
const commentController = require('./../controllers/commentController');
const { response } = require('express');
const toColor = require('../utility/colorConverter');
var router = express.Router()

router.get('/:id', function(req, res) {
    const comment=[]
    var productID = req.params.id || 1;
    commentController.getProductComment(productID).then(cmt => {
        cmt.forEach(element => {
            comment.push(element.dataValues)
        });
        comment.forEach(element=>{
            let tmp=[]
            tmp=JSON.stringify(element.createdAt)
            tmp=tmp.substr(1,10)
            element.createdAt=tmp
        })
        res.locals.comment = cmt
        controller.getProductById(productID).then(product => {
            colors = [];
            res.locals.product = product;
            res.locals.colors = colors;
            res.render('product-detail');
        })
    });
});

module.exports = router