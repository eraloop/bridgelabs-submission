const express = require('express')
const router = express.Router()

const getDb = require('../../utils/database').getDb

const getCategories = async (req, res, next)=>{
    const db = getDb()
    const result = await db.collection('categories').find().toArray()
    res.send(result).status(200)
    next()
}

module.exports = getCategories