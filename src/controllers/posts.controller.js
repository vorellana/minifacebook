const postsCtrl = {};
const Post = require('../models/post');

postsCtrl.getPosts = async(req, res) => {
    const posts = await Post.find({}).sort({"createdAt":'desc'});
    res.json(posts);
};

postsCtrl.insertPosts = async(req, res) => {
    const{user_id, message, privacy} = req.body;
    let newPost = new Post({user_id:user_id, message: message, privacy: privacy})
    const resPost = await newPost.save();
    console.log('El Post se insertó correctamente');
    res.json(resPost);
};

module.exports = postsCtrl;