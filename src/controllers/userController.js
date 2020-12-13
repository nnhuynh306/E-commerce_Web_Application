let controller = {};
let models = require('../models');
let User = models.User;
let bcrypt = require('bcryptjs')

controller.getUserByUsername = (username) => {
    return User.findOne({
        where: {
            name: username,
        }
    })
}

controller.createUser = (user) => {
    var salt = bcrypt.genSaltSync(10);
    user.pass = bcrypt.hashSync(user.pass, salt);
    return User.create(user);
}

controller.comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

controller.isLoggedIn = (req) => {
    return req.session.user
}

module.exports = controller;