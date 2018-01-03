const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    email: String
}); 

module.exports = mongoose.model('user',userSchema,'users');