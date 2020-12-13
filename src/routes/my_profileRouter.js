const express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
router.use(express.static('../public'))

router.get('/:page', (req, res) => {
    if (userController.isLoggedIn(req)) {
        var page = req.params.page;
        var activeTabClass = "active_"
        if (page == null) {
            activeTabClass = activeTabClass + "edit_profile";
        } else {
            activeTabClass = activeTabClass + page;
        }
    
        res.locals[activeTabClass] = "show active";
        res.render('my_profile')
    }
})

module.exports = router