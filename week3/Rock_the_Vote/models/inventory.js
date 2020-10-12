const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
        description: {
        type: String,
        required: true
    },
    price: Number
})

module.exports = mongoose.model("Inventory", inventorySchema)