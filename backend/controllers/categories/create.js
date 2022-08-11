const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

const CategoryModel = require("../../models/CategoryModel").CategorySchema
// const getDb = require("../../utils/database").getDb

const createCategory = async (req, res, next ) => {

    if((req.body.title === '') || (req.body.description === '') || (req.body.avatar === '') || (req.body.created_at === '')){
        return res.json({
            error: true,
            message: "Category information not complete, please carefully provide the information required",
            status : 400
        })
    }

    const categoryData = {
        name : req.body.title,
        description: req.body.description,
        avatar: req.body.avatar,
        created_at: req.body.created_at
    }

    const category = new CategoryModel(categoryData)
    category.save()

    const response = {
        error: false,
        status: 201,
        statusText: "created",
        data: categoryData,
    }

    res.status(201).send(response)

    next()
}

module.exports = createCategory