const express = require('express')
const router = express.Router()

const getDb = require('../../utils/database').getDb
const {hashPassword, generateJWT, generateRefreshToken }  = require('../../utils/token')
const UserModel = require("../../models/UserModel").UserSchema


const registerUser = async (req, res, next)=>{

    console.log(req)

    // if((req.body === {})){
    //     // console.log("body empty")
    //     // res.send("body empty")
    //     return false
    // }

    // if(req.body.password === '') {
    //     res.send({error: true, message: "password not provided, please verify your credentials"}) 
    //     return false
    // }else{
    //     req.body.password  = hashPassword(req.body.password)
    // }

    // userData = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     avatar: req.body.avatar,
    //     phone: req.body.phone,
    //     password: req.body.password
    // }

    // console.log(userData)

    // if((userData.name == '' || userData.email == '' || userData.avatar == '' || userData.password == '' || userData.phone == '')){
    //     return res.json({
    //         error: true,
    //         message: "Important user data not provided, please resubmit form, if this persist, contact customer service: 673572533"
    //     })
    // }

    // // const user = new UserModel(userData)
    // const db = getDb()
    // const dbusers = await db.collection('users').find().toArray()

    // if(typeof dbusers !== 'undefined' && dbusers.length === 0){
        
    //     registerUser(userData)

    // }else{
    //     dbusers.forEach( usr =>{

    //         if((usr.email === userData.email)){
    //             res.send("User already exist with this email")
    //             return
    //         }

    //         registerUser(userData)
    //     })
    // }
}

module.exports = registerUser