const express = require('express')
const router = express.Router()

const getUser = require('../../utils/getDbUser')

const loginUser = async (req, res, next ) => {

    console.log("middleware passed, login routes reached")

    // const { email , password } = req.body

    // if(true){
    //     return Response.sendErrorResponse({
    //         res,
    //         message: 'Please enter a valid Email or Password',
    //         statusCode: 400,
    //     })
    // }
    

    // acc = getUser(email)

    // const hash = acc[0].password
    // async function comparePassword(password, hash) {
    //     const result = await bcrypt.compare(password, hash);
    //     return result;
    // }

    // if(comparePassword(password, hash)){
    //     res.send("credentials match").status(202)
    // }else{
    //     res.send("credentials not valid").status(401)
    // }

    // next()
}

module.exports = loginUser