const express = require('express')
const todoRouter = express.Router()
const Todo = require("../models/todo.js")




// Get All
todoRouter.get("/", (req, res, next) => {
    Todo.find((err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

// Get todos by user id
todoRouter.get("/user", (req, res, next) => {
    Todo.find({ user: req.user._id }, (err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

// Get One
todoRouter.get("/:todoId", (req, res, next) => {
    Todo.findOne((err, oneTodo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneTodo)
    })
})

// Post One
todoRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newtodo = new Todo(req.body)
    newtodo.save((err, savedTodo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTodo)
    })
})

// Delete One
todoRouter.delete("/:todoId", (req, res, next) => {
    Todo.findOneAndDelete({_id: req.params.todoId, user: req.user._id }, (err, deletedTodo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted todo ${deletedTodo.title}`)
    })

// Update One
todoRouter.put("/:todoId", (req, res, next) => {
    Todo.findOneAndUpdate(
        {_id: req.params.todoId, user: req.user._id }, // find this one to update
        req.body, // update the object with this data
        {new: true}, // sends back the updated version
        (err, updatedTodo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTodo)
        }
    )
})


})

module.exports = todoRouter