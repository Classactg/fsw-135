const express = require('express')
const voteRouter = express.Router()
const voteItem = require("../../models/issue")




// Get All
voteRouter.get("/", (req, res, next) => {
    voteItem.find((err, allvote) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allvote)
    })
})

// Get One
voteRouter.get("/:voteId", (req, res, next) => {
    voteItem.findOne((err, onevoteItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(onevoteItem)
    })
})

// Post One
voteRouter.post("/", (req, res, next) => {
    const newvote = new voteItem(req.body)
    newvote.save((err, savedvote) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedvote)
    })
})

// Update One
voteRouter.put("/:voteId", (req, res, next) => {
    voteItem.findOneAndUpdate(
        {_id: req.params.voteId}, // find this one to update
        req.body, // update the object with this data
        {new: true}, // sends back the updated version
        (err, updatedvote) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedvote)
        }
    )
})

// Delete One
voteRouter.delete("/:voteId", (req, res, next) => {
    voteItem.findOneAndDelete({_id: req.params.voteId}, (err, deletedvote) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedvote.title} from the database!`)
    })
})

module.exports = voteRouter