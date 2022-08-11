const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const i = 'bridgelabs'
const s = 'jwt-node'
const a = 'users'

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

const generateRefreshToken = (payload)=>{

    const signRefreshOptions = {
        issuer: i,
        subject: s,
        audience: a,
        expiresIn: '120min'
        // algorithm: 'HS256',
    }

    const options = signRefreshOptions

    if (payload && payload.exp) {
        delete options.expiresIn
    }

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, signRefreshOptions)

    return refreshToken
}

const generateJWT = (payload) => {

    try{
        const signJwtOptions = {
            issuer: i,
            subject: s,
            audience: a,
            expiresIn: '15m',
            // algorithm: 'HS256',
        }
    
        if (payload && payload.exp) {
            delete options.expiresIn
        }
    
        const token = jwt.sign(payload, process.env.TOKEN_KEY, signJwtOptions)
        return token

    }
    catch(e){
        if (e instanceof jwt.JsonWebTokenError) {
            // return res.status(401).end()
            console.log(e)
        }
    }

   
}

const verifyJWT = (payload) => {

    try{

        console.log("token for verification",payload)
        const verifyJwtOptions = {
            issuer: i,
            subject: s,
            audience: a,
            expiresIn: '15m',
            // algorithm: 'HS256',
        }
    
        const result = jwt.verify(payload, process.env.TOKEN_KEY, verifyJwtOptions)
        return result
    }
    catch(e){

        if (e instanceof jwt.JsonWebTokenError) {
            // return res.status(401).end()
            console.log("token verification error",e)
        }
    }
}


const verifyRefreshToken = (payload) => {
    const verifyRefreshOptions = {
        issuer: i,
        subject: s,
        audience: a,
        expiresIn: '15min',
        // algorithm: 'HS256',
    }
    return jwt.verify(payload, process.env.REFRESH_TOKEN_KEY, verifyRefreshOptions)
}


const refreshNewToken = (token)=>{

    if(!token){
        return res.json({
            error: true,
            message:"Referesh token not available, please login"
        })
    }
    
    const expired = verifyRefreshToken(token)

    console.log("result of refreh token exppired state", expired)

    if(expired){
        return res.json({
            error: true,
            message: "refresh token expired, please login"
        })
    }

    const new_token = generateJWT(payload)
    const refreshToken = generateRefreshToken(payload)

    return  new_token, refreshToken
}

const hashPassword = (password) => {
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

module.exports = {
    hashPassword, verifyJWT, verifyRefreshToken, refreshNewToken, generateJWT, generateRefreshToken
}