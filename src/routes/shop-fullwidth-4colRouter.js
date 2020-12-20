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
    });
    router.get('/perfume/az', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 1;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });
    router.get('/perfume/za', function(req, res) {
            let sortController = require('./../controllers/categoryController');
            function compare(a, b) {
                const A = a.name.toUpperCase();
                const B = b.name.toUpperCase();
              
                let comparison = 0;
                if (A >B) {
                  comparison = -1;
                } else if (A <B) {
                  comparison = 1;
                }
                return comparison;
              }
            var CategoryId = req.query.CategoryId || 1;
            const tmp=[];
                sortController.getProductByCategory(CategoryId).then(Product=> {
                    Product.forEach(element => {
                        tmp.push(element.dataValues);
                    });
                    tmp.sort(compare)
                    res.locals.Product=tmp;
                res.render('shop-fullwidth-4col');
              });  
        });

    router.get('/perfume/low_high', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 1;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });
    router.get('/perfume/high_low', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = -1;
            } else if (A <B) {
              comparison = 1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 1;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });


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
    router.get('/cosmetic/az', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 2;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });
    router.get('/cosmetic/za', function(req, res) {
            let sortController = require('./../controllers/categoryController');
            function compare(a, b) {
                const A = a.name.toUpperCase();
                const B = b.name.toUpperCase();
              
                let comparison = 0;
                if (A >B) {
                  comparison = -1;
                } else if (A <B) {
                  comparison = 1;
                }
                return comparison;
              }
            var CategoryId = req.query.CategoryId || 2;
            const tmp=[];
                sortController.getProductByCategory(CategoryId).then(Product=> {
                    Product.forEach(element => {
                        tmp.push(element.dataValues);
                    });
                    tmp.sort(compare)
                    res.locals.Product=tmp;
                res.render('shop-fullwidth-4col');
              });  
        });
    router.get('/cosmetic/low_high', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 2;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });
    router.get('/cosmetic/high_low', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = -1;
            } else if (A <B) {
              comparison = 1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 2;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });

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
    });
    router.get('/fashion/az', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 3;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });
    router.get('/fashion/za', function(req, res) {
            let sortController = require('./../controllers/categoryController');
            function compare(a, b) {
                const A = a.name.toUpperCase();
                const B = b.name.toUpperCase();
              
                let comparison = 0;
                if (A >B) {
                  comparison = -1;
                } else if (A <B) {
                  comparison = 1;
                }
                return comparison;
              }
            var CategoryId = req.query.CategoryId || 3;
            const tmp=[];
                sortController.getProductByCategory(CategoryId).then(Product=> {
                    Product.forEach(element => {
                        tmp.push(element.dataValues);
                    });
                    tmp.sort(compare)
                    res.locals.Product=tmp;
                res.render('shop-fullwidth-4col');
              });  
        });
    router.get('/fashion/low_high', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 3;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });
    router.get('/fashion/high_low', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = -1;
            } else if (A <B) {
              comparison = 1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 3;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });

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
    });
    router.get('/skincare/az', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 4;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });
    router.get('/skincare/za', function(req, res) {
            let sortController = require('./../controllers/categoryController');
            function compare(a, b) {
                const A = a.name.toUpperCase();
                const B = b.name.toUpperCase();
              
                let comparison = 0;
                if (A >B) {
                  comparison = -1;
                } else if (A <B) {
                  comparison = 1;
                }
                return comparison;
              }
            var CategoryId = req.query.CategoryId || 4;
            const tmp=[];
                sortController.getProductByCategory(CategoryId).then(Product=> {
                    Product.forEach(element => {
                        tmp.push(element.dataValues);
                    });
                    tmp.sort(compare)
                    res.locals.Product=tmp;
                res.render('shop-fullwidth-4col');
              });  
        });
    router.get('/skincare/low_high', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 4;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });
    router.get('/skincare/high_low', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = -1;
            } else if (A <B) {
              comparison = 1;
            }
            return comparison;
          }
        var CategoryId = req.query.CategoryId || 4;
        const tmp=[];
            sortController.getProductByCategory(CategoryId).then(Product=> {
                Product.forEach(element => {
                    tmp.push(element.dataValues);
                });
                tmp.sort(compare)
                res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
          });  
        });


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
    });
    router.get('/az', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
          const tmp=[];
          sortController.getAll().then(Product=> {
              Product.forEach(element => {
                  tmp.push(element.dataValues);
              });
              tmp.sort(compare)
              res.locals.Product=tmp;
              res.render('shop-fullwidth-4col');
              });
            });
    router.get('/za', function(req, res) {
                let sortController = require('./../controllers/categoryController');
                function compare(a, b) {
                    const A = a.name.toUpperCase();
                    const B = b.name.toUpperCase();
                  
                    let comparison = 0;
                    if (A >B) {
                      comparison = -1;
                    } else if (A <B) {
                      comparison = 1;
                    }
                    return comparison;
                  }
                  const tmp=[];
                  sortController.getAll().then(Product=> {
                      Product.forEach(element => {
                          tmp.push(element.dataValues);
                      });
                      tmp.sort(compare)
                      res.locals.Product=tmp;
                      res.render('shop-fullwidth-4col');
                      });
            });
    router.get('/low_high', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = 1;
            } else if (A <B) {
              comparison = -1;
            }
            return comparison;
          }
          const tmp=[];
          sortController.getAll().then(Product=> {
            Product.forEach(element => {
                tmp.push(element.dataValues);
            });
            tmp.sort(compare)
            res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
            });
        });
    router.get('/high_low', function(req, res) {
        let sortController = require('./../controllers/categoryController');
        function compare(a, b) {
            const A = a.price;
            const B = b.price;
          
            let comparison = 0;
            if (A >B) {
              comparison = -1;
            } else if (A <B) {
              comparison = 1;
            }
            return comparison;
          }
          const tmp=[];
          sortController.getAll().then(Product=> {
            Product.forEach(element => {
                tmp.push(element.dataValues);
            });
            tmp.sort(compare)
            res.locals.Product=tmp;
            res.render('shop-fullwidth-4col');
            });
        });
module.exports = router