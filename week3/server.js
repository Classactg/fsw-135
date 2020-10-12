const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


// Middleware (for every request)
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/votesdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
)


// Routes //
app.use("/votes", require("./Rock_the_Vote/routes/voteRouter.js")

// Error handler 
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen
app.listen(9000, () => {
    console.log("Server is running on Port 9000")
})