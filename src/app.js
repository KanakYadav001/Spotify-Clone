const express = require('express')
const AuthRouter = require('./routers/user.router')
const musicRoute = require('./routers/music.router')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(express.json())



app.use('/api',AuthRouter)
app.use('/api/music',musicRoute)





module.exports=app