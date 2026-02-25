const express = require('express')
const {CreateMusic, CreateAlbum} = require('../controller/music.controller')
const multer = require('multer')
const ArtistAuthController = require('../middleware/auth.middleware')
const router  = express.Router()

const upload = multer({storage  : multer.memoryStorage()})

router.post('/music',upload.single('music'),ArtistAuthController,CreateMusic)
router.post('/album',ArtistAuthController,CreateAlbum)






module.exports=router