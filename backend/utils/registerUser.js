const {generateJWT, generateRefreshToken} = require('./token')
const UserModel = require("../models/UserModel")

const registerUser = async (userData) =>{

    const token = await generateJWT(userData)
    const refreshToken =  generateRefreshToken(userData)

    console.log(token , refreshToken)

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

    user.save()
    res.cookie('token', jwt, {httpOnly: true})
    res.status(200).send(response)

    return true
}

modules.exports = registerUser