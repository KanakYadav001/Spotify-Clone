const mongo = require('mongoose')

const UserScema = new mongo.Schema({


    username:{
        type : String,
        unique : true,
        required : true
    },
    email :{
         type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },

    role : {
        type : String,
        enum : ["user","artist"],
        default : "user"
    }
})



const UserModel = mongo.model("users",UserScema)




module.exports=UserModel