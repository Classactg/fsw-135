const express = require('express')
const voteRouter = express.Router()
const Vote = require("../models/vote.js")


// Get All votes
voteRouter.get("/", (req, res) => {
   Vote.find((err, votes) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(votes)
   })
})

// Post One
movieRouter.post("/", (req, res) => {
    const newVote = req.body
    newVote._id = uuid()
    votes.push(newVote)
    res.status(201).send(newVote)
})


// Get One
voteRouter.get("/:votesId", (req, res, next) => {
    const voteId = req.params.voteId
    const foundVote = votes.find(vote => vote._id === voteId)
    if(!foundVote){
        const error = new Error(`The item with id ${voteId} was not found.`)
        return next(error)
    }
})