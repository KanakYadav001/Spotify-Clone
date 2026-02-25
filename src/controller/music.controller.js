const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')
const UploadFile = require('../services/storage.services')
const MusicModel = require('../models/music.model')

async function CreateMusic(req,res){
    const token  = req.cookie.token

    if(!token){
        return res.status(401).json({
            message : "Please Login Or Register First"
        })
    }


    try{

        const decoaded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoaded.role !== "artist"){
            return res.status(401).json({
                message : "Only Artist Made Songs"
            })
        }
     
        

    }catch(err){
        res.status(401).json({
            message : "Invalid Token !"
        })
    }


    const {title} = req.body
    const file  = req.file


    const result = await UploadFile(file,title)


    const MusicCreate = await MusicModel.create({
       url: result.url,
        title, 
        artist : decoaded.id
    })


    res.status(201).json({
        message : "Music Create Sucessfully",
        MusicCreate
    })
}




module.exports=CreateMusic