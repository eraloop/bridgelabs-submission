const express = require('express')
const router = express.Router()

const StoryModel = require('../../models/UserModel')
const getDb = require('../../utils/database').getDb

const logoutUser = async (req, res, next)=>{

    const { refresh_token } = req.body.refresh_token

    const db = getDb()
    // const dbusers = await db.collection('blacklist').find().toArray()
    const response = db.collection('blacklist').insertOne(refresh_token).then(res=>{
        return res
    })

    res.send("Logout successfully").status(200)

}

module.exports = logoutUser