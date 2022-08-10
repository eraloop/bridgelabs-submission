const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');


const {generateJWT, generateRefreshToken} = require('../../utils/token')

const getUser = require('../../utils/getDbUser')

const loginUser = async (req, res, next ) => {

    const { phone , password } = req.body

    if(phone === '' || password === ''){
        res.json({
            error: true,
            message: "Credentials not complete"
        })
        return 
    }

    const token =  generateJWT({ phone , password })
    const refreshToken =  generateRefreshToken({ phone , password })

    if((token === undefined || token === '') || (refreshToken === undefined || refreshToken === '')){
        res.json({
            error: true,
            message: "login failed, invalid token returned"
        })
        return false
    }

    const jwt = {
        token: token,
        refreshToken: refreshToken
    }

    const acc = await getUser(phone)

    const hash = acc[0].password

    async function comparePassword(password, hash) {
        const result = bcrypt.compare(password, hash);
        return result;
    }

    const response = {
        error: false,
        statusText: "OK",

        data: {
            phone: phone,
        },
        token: jwt.token,
        refreshToken: jwt.refreshToken
    }

    if(comparePassword(password, hash)){
        // res.send("credentials match").status(202)
        res.cookie('token', jwt, {httpOnly: true})
        res.status(200).send(response)
    }else{
        res.send("credentials not valid").status(401)
    }

    next()
}

module.exports = loginUser