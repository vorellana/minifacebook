const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: String,
    name: String,
    last_name: String,
    phone: String
});

module.exports = model('users', UserSchema);
