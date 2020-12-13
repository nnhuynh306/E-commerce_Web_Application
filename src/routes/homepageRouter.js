const express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    let sortController = require('./../controllers/categoryController');
    const tmp=[];
    sortController.getAll().then(Product=> {
        Product.forEach(element => {
            tmp.push(element.dataValues);
            });
        res.locals.Product=tmp;
        res.render('homepage')
    })
    
});

router.get('/shop-fullwidth-4col', function(req, res) {
    res.render('shop-fullwidth-4col')
});
module.exports = router