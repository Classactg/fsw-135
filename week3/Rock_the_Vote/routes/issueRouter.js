const express = require('express')
const issueRouter = express.Router()
const issueItem = require("../models/issue.js")




// Get All
issueRouter.get("/", (req, res, next) => {
    issueItem.find((err, allissue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allissue)
    })
})

// Get One
issueRouter.get("/:issueId", (req, res, next) => {
    issueItem.findOne((err, oneissueItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneissueItem)
    })
})

// Post One
issueRouter.post("/", (req, res, next) => {
    const newissue = new issueItem(req.body)
    newissue.save((err, savedissue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedissue)
    })
})

// Update One
issueRouter.put("/:issueId", (req, res, next) => {
    issueItem.findOneAndUpdate(
        {_id: req.params.issueId}, // find this one to update
        req.body, // update the object with this data
        {new: true}, // sends back the updated version
        (err, updatedissue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedissue)
        }
    )
})

// Delete One
issueRouter.delete("/:issueId", (req, res, next) => {
    issueItem.findOneAndDelete({_id: req.params.issueId}, (err, deletedissue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedissue.title} from the database!`)
    })
})

module.exports = issueRouter