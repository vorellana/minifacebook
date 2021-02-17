const { Router } = require('express');
const router = Router();

// controller
const { 
    getPosts,
    getPostsId,
    insertPosts,
    updatePosts,
    deletePosts
} = require('../controllers/posts.controller');

const base = '/api/posts';

router.get(base, (req, res) => { getPosts(req, res); });

router.get(base + 'Id', (req, res) => { getPostsId(req, res); });

router.post(base, (req, res) => { insertPosts(req, res); });

router.put(base, (req, res) => { updatePosts(req, res); });

router.delete(base, (req, res) => { deletePosts(req, res); });

module.exports = router;