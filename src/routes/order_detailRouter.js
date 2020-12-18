const express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')


router.get('/',userController.isLoggedIn, (req, res) => {
    
});

module.exports = router