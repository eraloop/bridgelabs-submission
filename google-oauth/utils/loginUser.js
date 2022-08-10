const {generateJWT, generateRefreshToken} = require('./token')
const UserModel = require("../models/UserModel")

const loginUser = async ({email, password}) =>{

    const token = await generateJWT(userData)
    const refreshToken =  generateRefreshToken(userData)

    console.log(token , refreshToken)

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

    acc = getUser(email)

    const hash = acc[0].password

    async function comparePassword(password, hash) {
        const result = await bcrypt.compare(password, hash);
        return result;
    }

    const response = {
        error: false,
        statusText: "OK",

        data: {
            email: email,
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

modules.exports = loginUser