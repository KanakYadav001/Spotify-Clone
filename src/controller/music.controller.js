const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')
const UploadFile = require('../services/storage.services')
const MusicModel = require('../models/music.model')
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


async function GetAllSongs(req,res){
    const songs =  await MusicModel.find().limit(10)


    res.status(201).json({
        message : "Songs Fetch Sucessfully",
        songs
    })
}


async function GetAllAlbum(req,res){
    const album  = await AlbumModel.find().select('title artist')

    return res.status(200).json({
        message : "All Album Fetch",
        album
    })
}



async function GetAlbumId(req,res){
    const AlbumId  = req.params.albumId

    const Album = await AlbumModel.findById(AlbumId).populate("artist",'username email')

    res.status(200).json({
        message : "Album Songs Fetch Sucessfullt",
        Album
    })
}

module.exports={CreateMusic, CreateAlbum , GetAllSongs , GetAllAlbum, GetAlbumId}