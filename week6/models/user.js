const mongoose = require('mongoose')
const Schema = mongoose.Schema

// users Blueprint
const userSchema = new Schema({
    username: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    proposition: Number
})

module.exports = mongoose.model("users", userSchema)