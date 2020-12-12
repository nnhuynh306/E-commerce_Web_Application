const express = require('express')
var router = express.Router()

router.use(express.static('../public'))

router.get('/demo', (req, res) => {
    res.locals.user = {
        login: true,
    };

    var activeTab = req.query.activeTab;
    var activeTabClass = "active_"
    if (activeTab == null) {
        activeTabClass = activeTabClass + "edit_profile";
    } else {
        activeTabClass = activeTabClass + activeTab;
    }

    res.locals.activeTabClass = "show active";
    console.log(res.locals.user)
    res.render('my_profile')
})

router.get('/:page', (req, res) => {
    var page = req.params.page;
    res.render('my_profile',{
        page: page
    })
})

module.exports = router