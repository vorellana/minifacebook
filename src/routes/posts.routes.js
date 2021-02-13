const { Router } = require('express');
const router = Router();

// controller
const { 
    getPosts,
    insertPosts
} = require('../controllers/posts.controller');

const base = '/api/posts';

router.get(base, (req, res) => { getPosts(req, res); });

router.post(base, (req, res) => { insertPosts(req, res); });


module.exports = router;