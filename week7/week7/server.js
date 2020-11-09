const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

process.env.SECRET 

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
app.use("/api/user", require("./Rock_The_Vote/routes/userRouter"))
app.use("/api/issue", require("./Rock_The_Vote/routes/voteRouter"))
app.use("/api/comment", require("./Rock_The_Vote/routes/commentRouter"))
app.use('/api/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET }))
app.use('/todo', require('./routes/todoRouter.js'))

// Error handler 
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status
    }
    return res.send({errMsg: err.message})
})

// Server Listen
app.listen(9000, () => {
    console.log("Server is running on Port 9000")})