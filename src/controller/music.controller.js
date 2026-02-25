const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')
const UploadFile = require('../services/storage.services')
const MusicModel = require('../models/music.model')
const MusicAlbum = require('../models/album.model')
const AlbumModel = require('../models/album.model')





async function CreateMusic(req,res){
    


    const {title} = req.body
    const file  = req.file
  const Artistid  = req.user

    const result = await UploadFile(file,title)


    const MusicCreate = await MusicModel.create({
       url: result.url,
        title, 
        artist : Artistid
    })


    res.status(201).json({
        message : "Music Create Sucessfully",
        MusicCreate
    })
}


async function CreateAlbum(req,res){
   
    const {title,songs} = req.body
const Artistid  = req.user
    const album = await AlbumModel.create({
        title,
        songs,
        artist :Artistid
    })



    res.status(201).json({
        message : "Album Create Sucessfully",
        album
    })
}



module.exports={CreateMusic, CreateAlbum}