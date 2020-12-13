const express = require('express')
const fs = require('fs')
const { get } = require('http')

const app = express()
const port = process.env.PORT || 3000;

//CREATE HANDLEBARS
var hbs = require('express-handlebars')

app.use(express.static(__dirname + '/src/public'));

app.set('views', __dirname + '/src/views');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/src/views/layouts',
    partialsDir: __dirname + '/src/views/partials'
}))

app.set('view engine', 'hbs');

//BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//SESSION
const session = require('express-session');
app.use(session({
    resave: false, 
    saveUninitialized: false, 
    secret: 'somesecret', 
    cookie: { maxAge: null }}
));

var Cart = require(__dirname + '/src/controllers/cartController')

app.use((req, res, next) => {
  var cart = new Cart(req.session.cart? req.session.cart : {});
  req.session.cart = cart;
  res.locals.cartQuantity = cart.getTotalQuantity();

  res.locals.username = req.session.user ? req.session.user.name : "";
  res.locals.userLoggedIn = req.session.user ? true: false;
  next();
})
//ROUTER


app.use('/my_profile', require(__dirname + '/src/routes/my_profileRouter'))

app.use('/cart', require(__dirname + '/src/routes/cartRouter'))

app.use('/product-detail', require(__dirname + '/src/routes/product-detailRouter'))

app.use('/user', require(__dirname + '/src/routes/userRouter'))

app.use('/shop-fullwidth-4col', require(__dirname + '/src/routes/shop-fullwidth-4colRouter'))

app.use('/', require(__dirname + '/src/routes/homepageRouter'))
app.use('/comment', require(__dirname + '/src/routes/comment'))

app.get('/createTable', (req,res)=>{
    let models = require('./src/models');
    models.sequelize.sync().then(() => {
      res.send('table created');
    });
  });

app.get('/testDB',(req,res)=>{
    res.render('testDB.php')
});

app.get('/testing', (req, res) => {
  var productController = require(__dirname + '/src/controllers/productController');
  productController.getProductById(1).then(data => {
    res.json(data);
  })
})

//ERROR HANDLER
app.use((req, res) => {
  res.locals.message = "Request Not Found"
  res.status(404).render('error')
})

app.use((err, req, res, next) => {
  res.locals.message = "Internal server error"
  console.log(err)
  res.status(500).render('error')
})

app.listen(process.env.PORT || 3000);