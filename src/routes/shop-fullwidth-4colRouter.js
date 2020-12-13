const express = require('express')
const router = express.Router()

router.get('/perfume', function(req, res) {
    let sortController = require('./../controllers/categoryController');
    var CategoryId = req.query.CategoryId || 1;
    const tmp=[];
        sortController.getProductByCategory(CategoryId).then(Product=> {
            Product.forEach(element => {
                tmp.push(element.dataValues);
            });
            res.locals.Product=tmp;
        res.render('shop-fullwidth-4col');
      });  
    })
    router.get('/cosmetic', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        var CategoryId = req.query.CategoryId || 2;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        })
        router.get('/fashion', function(req, res) {
            let sortController = require('./../controllers/categoryController');
            var CategoryId = req.query.CategoryId || 3;
            const tmp=[];
                sortController.getProductByCategory(CategoryId).then(Product=> {
                    Product.forEach(element => {
                        tmp.push(element.dataValues);
                    });
                    res.locals.Product=tmp;
                res.render('shop-fullwidth-4col');
              });  
            })
            router.get('/skincare', function(req, res) {
                let sortController = require('./../controllers/categoryController');
                var CategoryId = req.query.CategoryId || 4;
                const tmp=[];
                    sortController.getProductByCategory(CategoryId).then(Product=> {
                        Product.forEach(element => {
                            tmp.push(element.dataValues);
                        });
                        res.locals.Product=tmp;
                    res.render('shop-fullwidth-4col');
                  });  
                })
                router.get('/', function(req, res) {
                    let sortController = require('./../controllers/categoryController');
                    const tmp=[];
                        sortController.getAll().then(Product=> {
                            Product.forEach(element => {
                                tmp.push(element.dataValues);
                            });
                            res.locals.Product=tmp;
                        res.render('shop-fullwidth-4col');
                      });  
                    })
module.exports = router