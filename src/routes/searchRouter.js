const express = require('express');
var router = express.Router();
const searchController = require('./../controllers/searchController');



router.post('/', function(req, res){
    let keyword = req.body.keyword;
    console.log(keyword);
    searchController.findProduct(keyword)
    .then(Product =>{
        const tmp=[];
        Product.forEach(element => {
            tmp.push(element.dataValues);
        });
        res.locals.Product=tmp;
        res.render('shop-fullwidth-4col');
    })

});

module.exports = router