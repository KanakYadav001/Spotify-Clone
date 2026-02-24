const express = require('express')
const AuthRouter = require('./routers/user.router')

const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(express.json())



app.use('/api',AuthRouter)






module.exports=app