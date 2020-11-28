const PORT = process.env.PORT || 5000;
const express = require(`express`);
const {get} = require('http');
const fs = require('fs');

var app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {
    fs.readFile('src/UI/homepage1.html', (err, data) => {
        res.header(200, { 'Content-Type': 'text/html'})
        res.send(data);
    })
})

app.listen(PORT, ()=> {
    console.log('Server running');
})
