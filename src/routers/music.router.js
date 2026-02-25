const express = require('express')
const MusicController  = require('../controller/music.controller')

const router  = express.Router()



router.post('/',MusicController)






module.exports=router