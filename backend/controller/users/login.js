const express = require('express')
const router = express.Router()

const getUser = require('../../utils/getDbUser')

const loginUser = async (req, res, next ) => {

    const { email , password } = req.body

    if(email === '' || password === ''){
        res.json({
            error: true,
            message: "Credentials not complete"
        })
        return 
    }

    loginUser({email, password})
}

module.exports = loginUser