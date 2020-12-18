let controller = {};
let models = require('../models');
let User = models.User;
let bcrypt = require('bcryptjs')
let Op = require('sequelize').Op

controller.getUserByUsername = (username) => {
    return User.findOne({
        where: {
            name: username,
        }
    })
}

controller.getUserByUsernameOrEmail = (input) => {
    return User.findOne({
        where: {
            [Op.or]: [{name: input}, {email: input}]
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

controller.isLoggedIn = (req ,res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect(`/user/login?nextURL=${req.originalUrl}`);
    }
}

controller.getUserByEmail= (email) => {
    return User.findOne({
        where: {
            email: email,
        }
    })
}

controller.updateUserProfile = (user) => {
    return models.User.update({
        name: user.name,
        phoneNumber: user.phoneNumber,
        email: user.email,
        address: user.address,
    }, {
        where: {
            id: user.id,
        }
    })
}

controller.changeUserPassword = (id, password) => {
    var salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    return models.User.update({
        pass: password,
    }, {
        where: {
            id: id,
        }
    })
}

module.exports = controller;