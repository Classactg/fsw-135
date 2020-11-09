const mongoose = require('mongoose')
const Schema = mongoose.Schema

// comment Blueprint
const commentSchema = new Schema({
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

module.exports = mongoose.model("comment", commentSchema)