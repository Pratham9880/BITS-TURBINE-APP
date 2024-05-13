const { updatePassword } = require('firebase/auth');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema=new Schema({
    name:String,
    email:String,
    dateOfBirth:Date,
    password:String,
    repassword:String
})

const USer = mongoose.model('User',UserSchema);

module.exports = User;