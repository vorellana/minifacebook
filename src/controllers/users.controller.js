const usersCtrl = {};
const { json } = require('express');
const User = require('../models/user');

const{ login, logout } = require('../utils/firebase.auth')

usersCtrl.getUsers = async(req, res) => {
    const users = await User.find({})
    res.json(users);
};

usersCtrl.logoutUsers = async(req, res) => {
    const resLogout = await logout();
    res.json(resLogout);
};

usersCtrl.loginUsers = async(req, res) => {

    const{ email, password } = req.body;    
    const resLogin = await login(email, password);

    if (resLogin.successLogin){
        var user = await usersCtrl.getUsersEmail(email);
        res.json( {
            name: user.name,
            email: user.email,
            last_name: user.last_name
        });
    }else{
        res.json(resLogin);
    }
};

// *** aditionals ***

usersCtrl.getUsersEmail = async(email) => {
    const users = await User.findOne({ email: email })
    return users;
};

module.exports = usersCtrl;