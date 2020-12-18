const express = require('express');
var router = express.Router()
let userController = require('../controllers/userController')

router.get('/', function (req, res) {
    res.render("login", {
    })

});

module.exports = router