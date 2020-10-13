const mongoose = require('mongoose')
const Schema = mongoose.Schema

// users Blueprint
const userSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    party: {
        type: String,
        required: true
    },
    proposition: Number
})

module.exports = mongoose.model("users", userSchema)