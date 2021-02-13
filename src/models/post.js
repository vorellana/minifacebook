const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    user_id: String,
    message: String,
    privacy: String,
    phone: String
},
{
    timestamps:true}
);

module.exports = model('posts', PostSchema);