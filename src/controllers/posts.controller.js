const postsCtrl = {};
const Post = require('../models/post');

postsCtrl.getPosts = async(req, res) => {
    let filters;
    const{user_id, privacy} = req.query;
    if(privacy === 'A') filters = { user_id: user_id };
    else filters = { user_id: user_id, privacy: privacy };
    const posts = await Post.find(filters).sort({"createdAt":'desc'});
    res.json(posts);
};

postsCtrl.getPostsId = async(req, res) => {
    const id = req.query.id;
    const posts = await Post.findById(id);
    res.json(posts);
};

postsCtrl.insertPosts = async(req, res) => {
    const{user_id, message, privacy} = req.body;
    let newPost = new Post({user_id:user_id, message: message, privacy: privacy})
    const resPost = await newPost.save();
    console.log('El Post se insertó correctamente');
    res.json(resPost);
};

postsCtrl.updatePosts = async(req, res) => {
    const{id, message} = req.body;
    const resPost = await Post.findByIdAndUpdate(id, {message: message}, {});
    console.log('El Post se actualizó correctamente');
    res.json(resPost);
};

postsCtrl.deletePosts = async(req, res) => {
    const{ id } = req.body;
    const resPost = await Post.findByIdAndDelete(id);
    console.log('El Post se eliminó correctamente');
    res.json(resPost);
};

module.exports = postsCtrl;