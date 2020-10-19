const express = require ('express')
const inventoryRouter = express.Router()
const inventoryItem = require('../models/inventory')


// Get All
inventoryRouter.get("/", (req, res, next) => {
    inventoryItem.find((err, allInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allInventory)
    })
})

// Get One
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    inventoryItem.findOne((err, oneInventoryItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneInventoryItem)
    })
})

// Post One
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new inventoryItem(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

// Update One
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    inventoryItem.findOneAndUpdate(
        {_id: req.params.inventoryId}, // find this one to update
        req.body, // update the object with this data
        {new: true}, // sends back the updated version
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})

// Delete One
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    inventoryItem.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedInventory.title} from the database!`)
    })
})

module.exports = inventoryRouter