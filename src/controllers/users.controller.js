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
    try {
        // verify E-mail
        let user = await usersCtrl.getUsersEmail(email);
        if(user === null){
            res.json( {
                email: email,
                message: "El E-mail es incorrecto",
                successLogin: false
            });
        } else {
            // login successful
            const resLogin = await login(email, password);
            if (resLogin.successLogin){
                res.json( {
                    name: user.name,
                    email: user.email,
                    last_name: user.last_name,
                    user_id: user.id,
                    successLogin: true
                });
            }else{
                res.json(resLogin);
            }
        }        
    } catch (error) {
        res.json({error, successLogin: false})
    }
};

// *** aditionals ***

usersCtrl.getUsersEmail = async(email) => {
    const users = await User.findOne({ email: email })
    return users;
};

module.exports = usersCtrl;