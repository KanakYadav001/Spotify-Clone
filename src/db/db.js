const mongo = require('mongoose')


async function ConnectToDB(){
    try{
   await mongo.connect(process.env.MONGO_URL)
   console.log("DB Connect Sucessfull");
   

    }catch(err){
   console.log("DB Not Connected");
   
    }
}



module.exports=ConnectToDB