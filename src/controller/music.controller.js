const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')


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
}




module.exports=CreateMusic