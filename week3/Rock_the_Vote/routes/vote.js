const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Votes Blueprint
const movieSchema = new Schema({
    name: {
        first: String,
        last: String,
        required: true 
    },
    party: {
        elephant: String,
        donkey: String,
        required: true
    },
    proposition: Number
})

module.exports = mongoose.model("Votes", voteRouter)