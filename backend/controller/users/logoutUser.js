const express = require('express')
const router = express.Router()

const StoryModel = require('../../models/users/UserModel')
const getDb = require('../../utils/database').getDb

const becomeContributor = async (req, res, next)=>{

    console.log(req.params)

    addedData = {
        NID: req.body.nid,
        occupation: req.body.occupation,
        residence: req.body.residence,
        aboutu: req.body.aboutu,
    }

    const db = getDb()
    const dbusers = await db.collection('users').find().toArray()

    dbusers.forEach(user=>{
        if(user.email === userData.email){
            res.send("user already exist with this email")
        }else{
            const user = new UserModel(userData)
            user.save()
            res.send("Successfully creaated user")
        }
    })

}

module.exports = becomeContributor