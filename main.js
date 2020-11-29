const express = require('express')
const fs = require('fs')
const { get } = require('http')

const app = express()
const port = 3000

app.use(express.static('src'))

// app.get('/', (req, res) => {
//   fs.readFile('/src/homepage1.html', (err, data) => {
//       console.log(data);
//       res.set('Content-Type', 'text/html');
//       res.send(data);
//   })

// })

app.get('/', function(req, res) {
    res.sendFile('/src/UI/login.html', {root: __dirname })
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})