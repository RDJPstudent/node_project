//user data blueprints

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
});

module.exports = mongoose.model('Users', userSchema);