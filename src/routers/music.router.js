const express = require('express')
const MusicController  = require('../controller/music.controller')
const multer = require('multer')
const router  = express.Router()

const upload = multer({storage  : multer.memoryStorage()})

router.post('/',upload.single('music'),MusicController)






module.exports=router