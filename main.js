const express = require('express')
const fs = require('fs')
const { get } = require('http')

const app = express()
const port = process.env.PORT || 3000;

//CREATE HANDLEBARS
var hbs = require('express-handlebars')

app.use(express.static(__dirname + '/src/UI'));

app.set('views', __dirname + '/src/views');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/src/views/layouts',
    partialsDir: __dirname + '/src/views/partials'
}))

app.set('view engine', 'hbs');


//REPONSE
app.get('/', function(req, res) {
    res.render('homepage')
});



app.get('/my_profile_history', (req, res) => {
    res.render('my_profile',{
        page:'history'
    })
})
app.get('/my_profile_status', (req, res) => {
    res.render('my_profile',{
        page:'status'
    })
})
app.get('/my_profile_address', (req, res) => {
    res.render('my_profile',{
        page:'address'
    })
})
app.get('/my_profile_edit_profile', (req, res) => {
    res.render('my_profile',{
        page:'edit_profile'
    })
})
app.get('/my_profile_security', (req, res) => {
    res.render('my_profile',{
        page:'security'
    })
})
app.get('/my_profile_setting', (req, res) => {
    res.render('my_profile',{
        page:'setting'
    })
})

app.get('/cart.html', (req, res) => {
    res.render('cart')
})

app.get('/checkout.html', (req, res) => {
    res.render('checkout')
})

app.get('/login.html', (req, res) => {
    res.render('login')
})

app.get('/product-detail.html', (req, res) => {
    res.render('product-detail')
})

app.get('/register.html', (req, res) => {
    res.render('register')
})

app.get('/shop-fullwidth-4col.html', (req, res) => {
    res.render('shop-fullwidth-4col')
})

app.get('/cart_demo.html', (req, res) => {
    res.locals.user = {
        login: true,
    };
    res.render('cart')
})

app.get('/edit_profile_demo', (req, res) => {
    res.locals.user = {
        login: true,
    };
    res.render('edit_profile')
})

app.get('/my_profile_demo_history', (req, res) => {
    res.locals.user = {
        login: true,
    };
    res.render('my_profile',{
        active_history:'show active'
    })
})
app.get('/my_profile_demo_status', (req, res) => {
    res.locals.user = {
        login: true,
    };
    res.render('my_profile',{
        active_status:'show active'
    })
})
app.get('/my_profile_demo_address', (req, res) => {
    res.locals.user = {
        login: true,
    };
    res.render('my_profile',{
        active_address:'show active'
    })
})
app.get('/my_profile_demo_edit_profile', (req, res) => {
    res.locals.user = {
        login: true,
    };
    res.render('my_profile',{
        active_edit_profile:'show active'
    })
})
app.get('/my_profile_demo_security', (req, res) => {
    res.locals.user = {
        login: true,
    };
    res.render('my_profile',{
        active_security:'show active'
    })
})
app.get('/my_profile_demo_setting', (req, res) => {
    res.locals.user = {
        login: true,
    };
    res.render('my_profile',{
        active_setting:'show active'
    })
})
app.get('/forgot_pass',(req,res)=>{
    res.render('forgot_pass')
})

app.listen(process.env.PORT || 3000);