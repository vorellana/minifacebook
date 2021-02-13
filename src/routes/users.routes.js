const { Router } = require('express');
const router = Router();

// controller
const{
    getUsers,
    loginUsers,
    logoutUsers
} = require('../controllers/users.controller')

const base = '/api/users';

router.get(base, (req, res) => { getUsers(req, res); });

router.post(base + '/login', (req, res) => { loginUsers(req, res); });

router.post(base + '/logout', (req, res) => { logoutUsers(req, res); });

module.exports = router;