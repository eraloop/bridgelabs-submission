const express = require('express')
const jwt = require('jsonwebtoken')
const {verifyJWT, refreshNewToken} = require('../utils/token')

const getUser = require('../utils/getDbUser')

const checkAndVerifyToken = (req, res, next) => {

    console.log("middleware activated")

    let token = req.headers.token
    console.log(token)
    console.log(req.body)
    console.log(req.headers)
    if (!token) {
        res.send("no token provided")
    }
    // if (token.startsWith('Bearer')) {
    //     // Remove Bearer from string
    //     token = token.slice(7, token.length)
    //     if (!token || token === '') res,send("no token provided")
    //     // res.json({ res, message: 'No token provided', statusCode: 401 })
    // }
    console.log("next will verify jwt")
    // // call the verifyJWT method to verify the token is valid
    const result = verifyJWT(token)

    if (result instanceof jwt.JsonWebTokenError) {
        res.send({
            error: true,
            message: "invalid token"
        })

        return 
    }
    // if (!result) res.send("token not valid") 

    // const acc = getUser(req.body.email)
    // console.log(acc)

    // const refreshToken = req.refreshToken
    // const verifyRefreshResult = verifyRefreshToken(refreshToken)

    // if(verifyRefreshResult){
    //     const newtoken = generateRefreshToken(acc)
    //     console.log("newly generated token", newtoken)
    //     res.token = newtoken
    // }

    // // res.json({ res, message: 'invalid signature', statusCode: 403 })
    // console.log("verify token result",result)
    // // console.log("newly generated token", newtoken)
    // // attach the result token to the res.user object
    // // if (result) res.user = decoded

    // res.token = token

    next()
}

module.exports = checkAndVerifyToken