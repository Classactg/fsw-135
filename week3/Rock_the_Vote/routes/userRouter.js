const express = require('express')
const userRouter = express.Router()
const userItem = require("../models/user.js")




// Get All
userRouter.get("/", (req, res, next) => {
    userItem.find((err, alluser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(alluser)
    })
})

// Get One
userRouter.get("/:userId", (req, res, next) => {
    userItem.findOne((err, oneuserItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneuserItem)
    })
})

// Post One
userRouter.post("/", (req, res, next) => {
    const newuser = new userItem(req.body)
    newuser.save((err, saveduser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saveduser)
    })
})

// Update One
userRouter.put("/:userId", (req, res, next) => {
    userItem.findOneAndUpdate(
        {_id: req.params.userId}, // find this one to update
        req.body, // update the object with this data
        {new: true}, // sends back the updated version
        (err, updateduser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateduser)
        }
    )
})

// Delete One
userRouter.delete("/:userId", (req, res, next) => {
    userItem.findOneAndDelete({_id: req.params.userId}, (err, deleteduser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deleteduser.title} from the database!`)
    })
})

module.exports = userRouter