const express = require('express');
var router = express.Router()
let userController = require('../controllers/userController')

router.get('/', function (req, res) {
    res.render("admin", {
        pageStyle: "admin-controller"
    })
});

module.exports = router