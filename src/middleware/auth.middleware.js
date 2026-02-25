const jwt = require('jsonwebtoken')
async function ArtistAuthController(req,res,next){
     const token  = req.cookies.token
    
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
         
            req.user = decoaded.id
            next()
            
    
        }catch(err){
           return res.status(401).json({
                message : "Invalid Token !"
            })
        }
}



async function AccessAuth(req,res,next){
    
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message  : "Token Not Found Please Login And Register"
        })
    }


    try{
    
        const decoaded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoaded.role !== "user"){
            return res.status(403).json({
                message : "Please Login To Access Songs"
            })
        }

        next()


    }catch(err){
      return   res.status(401).json({
            message : "Invalid Token"
        })
    }
}


module.exports={ ArtistAuthController , AccessAuth}