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


//ROUTES

app.get('/', function(req, res) {
    res.render('homepage')  
});


app.use('/my_profile', require(__dirname + '/src/routes/my_profileRouter'))

app.use('/cart', require(__dirname + '/src/routes/cartRouter'))

app.use('/product-detail', require(__dirname + '/src/routes/product-detailRouter'))

app.use('/user', require(__dirname + '/src/routes/userRouter'))

app.use('/shop-fullwidth-4col', require(__dirname + '/src/routes/shop-fullwidth-4colRouter'))

app.use('/', require(__dirname + '/src/routes/homepageRouter'))

app.get('/createTable', (req,res)=>{
    let models = require('./src/models');
    models.sequelize.sync().then(() => {
      res.send('table created');
    });
  });
app.get('/testDB',(req,res)=>{
    res.render('testDB.php')
});
app.listen(process.env.PORT || 3000);