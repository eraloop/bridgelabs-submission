const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

const getDb = require("../../utils/database").getDb

const getUser = require('../../utils/getDbUser')

const readCategory = async (req, res, next ) => {

    const db = getDb()
    const categories = await db.collection('categories').find().toArray()
    
    const response = {
        error: false,
        status: 201,
        statusText: "created",
        data: categories,
    }

    res.status(200).send(response)

    next()
}

module.exports = readCategory