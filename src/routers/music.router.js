const express = require('express')
const {CreateMusic, CreateAlbum , GetAllSongs , GetAllAlbum ,GetAlbumId} = require('../controller/music.controller')
const multer = require('multer')
const { ArtistAuthController , AccessAuth} = require('../middleware/auth.middleware')
const router  = express.Router()

const upload = multer({storage  : multer.memoryStorage()})

router.post('/music',ArtistAuthController,upload.single('music'),CreateMusic)
router.post('/album',ArtistAuthController,CreateAlbum)
router.get('/songs', AccessAuth ,GetAllSongs)
router.get('/album',AccessAuth,GetAllAlbum)
router.get('/music/album/:albumId',AccessAuth,GetAlbumId)





module.exports=router