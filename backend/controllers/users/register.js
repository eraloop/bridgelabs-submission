const express = require('express')
const router = express.Router()

const getDb = require('../../utils/database').getDb
const {hashPassword, generateJWT, generateRefreshToken }  = require('../../utils/token')
const UserModel = require("../../models/UserModel").UserSchema

// const registerUser = require("../../utils/registerUser")


const register = async (req, res, next)=>{

    console.log("request body",req.body)

    if((req.body === {})){
        return res.json({
            error: true,
            message: "User credentials are are not provided, please provide user credentials",
            status: 400
        })
    }

    if((req.body.password === '')) {
       return res.send({error: true, message: "password not provided, please verify your credentials"}) 
    }else{
        req.body.password  = hashPassword(req.body.password)
    }

    userData = {
        name: req.body.name,
        email: req.body.email,
        avatar: req.body.avatar,
        phone: req.body.phone,
        password: req.body.password
    }

    if((userData.name == '' || userData.email == '' || userData.password == '' || userData.phone == '')){
        return res.json({
            error: true,
            message: "Important user data not provided, please resubmit form, if this persist, contact customer service: 673572533"
        })
    }

    // const user = new UserModel(userData)
    const db = getDb()
    const dbusers = await db.collection('users').find().toArray()

    if(typeof dbusers !== 'undefined' && dbusers.length === 0){
        
        // registerUser(userData)

        const token = generateJWT(userData)
        const refreshToken =  generateRefreshToken(userData)

    
        if((token === undefined || token === '') || (refreshToken === undefined || refreshToken === '')){
            return res.json({
                error: true,
                message: "User creation failed, invalid token generation"
            })
        }
    
        const jwt = {
            token: token,
            refreshToken: refreshToken
        }
    
        const response = {
            error: false,
            statusText: "OK",
    
            data: {
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                avatar: userData.avatar
            },

            token: jwt.token,
            refreshToken: jwt.refreshToken
        }
    
        const user = new UserModel(userData)
    
        user.save()
        res.cookie('token', jwt, {httpOnly: true})
        res.status(200).send(response)
    
        return true

    }else{
        dbusers.forEach( usr =>{

            if((usr.email === userData.email)){
                res.send("User already exist with this email")
                return
            }
            // registerUser(userData)

            const token =  generateJWT(userData)
            const refreshToken =  generateRefreshToken(userData)
        
        
            if((token === undefined || token === '') || (refreshToken === undefined || refreshToken === '')){
                return res.json({
                    error: true,
                    message: "User creation failed, invalid token generation"
                })
            }
        
            const jwt = {
                token: token,
                refreshToken: refreshToken
            }
        
            const response = {
                error: false,
                statusText: "OK",
        
                data: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                    avatar: userData.avatar
                },

                token: jwt.token,
                refreshToken: jwt.refreshToken
            }
        
            const user = new UserModel(userData)
        
            user.save()

            
            res.cookie('token', jwt, {httpOnly: true})
            res.status(200).send(response)
        
            return true
        })
    }
}

module.exports = register