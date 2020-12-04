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

app.get('/edit_profile', (req, res) => {
    res.render('edit_profile')
})



app.listen(process.env.PORT || 3000);