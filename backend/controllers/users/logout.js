const express = require('express')
const router = express.Router()

const getDb = require('../../utils/database').getDb

const logoutUser = async (req, res, next)=>{

    const refresh_token = req.body.refresh_token

    const token = {
        refresh_token : refresh_token
    }

    const db = getDb()
    db.collection('blacklist').insertOne(token).then(res=>{
        console.log(res)
    })

    res.send("Loggout successfully")

}

module.exports = logoutUser