const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

const getDb = require("../../utils/database").getDb

const deleteCategory = async (req, res, next ) => {

    const id = req.params.id
    console.log(id)

    const db = getDb()
    const result = await db.collection('categories').deleteOne({_id: id})

    // categories.forEach(cat=>{
    //     return cat.id != id
    // })
    console.log(result)
    
    // const response = {
    //     error: false,
    //     status: 201,
    //     statusText: "created",
    //     data: categories,
    // }

    // res.status(200).send(response)

    next()
}

module.exports = deleteCategory