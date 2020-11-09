const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Votes Blueprint
const voteSchema = new Schema({
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

module.exports = mongoose.model("Votes", voteSchema)