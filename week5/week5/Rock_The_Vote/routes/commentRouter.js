const express = require('express')
const commentRouter = express.Router()
const commentItem = require("../../models/comment")




// Get All
commentRouter.get("/", (req, res, next) => {
    commentItem.find((err, allcomment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allcomment)
    })
})

// Get One
commentRouter.get("/:commentId", (req, res, next) => {
    commentItem.findOne((err, onecommentItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(onecommentItem)
    })
})

// Post One
commentRouter.post("/", (req, res, next) => {
    const newcomment = new commentItem(req.body)
    newcomment.save((err, savedcomment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedcomment)
    })
})

// Update One
commentRouter.put("/:commentId", (req, res, next) => {
    commentItem.findOneAndUpdate(
        {_id: req.params.commentId}, // find this one to update
        req.body, // update the object with this data
        {new: true}, // sends back the updated version
        (err, updatedcomment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedcomment)
        }
    )
})

// Delete One
commentRouter.delete("/:commentId", (req, res, next) => {
    commentItem.findOneAndDelete({_id: req.params.commentId}, (err, deletedcomment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedcomment.title} from the database!`)
    })
})

module.exports = commentRouter