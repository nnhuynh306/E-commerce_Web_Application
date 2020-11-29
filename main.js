const express = require('express')
const fs = require('fs')
const { get } = require('http')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('./src/UI'));


// app.get('/', (req, res) => {
//   fs.readFile('/src/homepage1.html', (err, data) => {
//       console.log(data);
//       res.set('Content-Type', 'text/html');
//       res.send(data);
//   })

// })

app.get('/', function(req, res) {
    res.sendFile('/src/UI/homepage1.html', {root: __dirname })
});



app.listen(process.env.PORT || 3000);