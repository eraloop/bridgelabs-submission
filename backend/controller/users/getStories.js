const express = require('express')
const router = express.Router()

const getDb = require('../../utils/database').getDb

const getStories = async (req, res, next)=>{
    const db = getDb()
    const result = await db.collection('stories').find().toArray()
    res.send(result).status(200)
    next()
}

module.exports = getStories