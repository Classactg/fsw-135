const mongoose = require('mongoose')
const Schema = mongoose.Schema

// issues Blueprint
const issueSchema = new Schema({
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

module.exports = mongoose.model("issues", issueSchema)