const userModel = require('../models/user.model')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



async function Register(req,res){

    const {username,email,password,role} = req.body
    

    const IsUser  = await userModel.findOne({
        $or:[
            {username},
            { email}
        ]
    })

    if(IsUser){
        return res.status(401).json({
            message : "User Already Exits"
        })
    }

    const hashPass = await bycrypt.hash(password,10)

    const User  = await userModel.create({
        username,
        email,
        password : hashPass ,
        role
    })
   
    const token = jwt.sign({id:User._id,role:User.role},process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({
        message : "User Created Sucessfully",
        User
    })
}


async function Login(req,res){

 
    const {email,password} = req.body


    const IsUser = await userModel.findOne({
        email
    })

    if(!IsUser){
        return res.status(401).json({
            message : "User Not Exits Please Register First "
        })
    }

    const Ispassword = await bycrypt.compare(password,IsUser.password)

    if(!Ispassword){
        return res.status(401).json({
            message : "Password Invalid"
        })
    }
    const token = jwt.sign({id:IsUser._id,role:IsUser.role},process.env.JWT_SECRET)

    res.cookie('token',token)


    res.status(201).json({
        message : "User Login Sucessfully",
    })
}



module.exports={
    Register,
    Login
}