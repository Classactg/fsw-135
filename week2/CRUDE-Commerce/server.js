const express = require ('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')

process.env.SECRET

// Middleware (for every request) //
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/moviesdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
)

// Routes //
app.use("/movies", require("./routes/inventoryRouter.js"))



// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
// Don't forget to npm install mongoose!!