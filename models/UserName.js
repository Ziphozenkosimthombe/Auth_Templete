const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
})

module.exports = mongoose.model('UserName', UserSchema)