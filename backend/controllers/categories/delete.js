const express = require('express')

var ObjectId = require('mongodb').ObjectId;

const getDb = require("../../utils/database").getDb

const deleteCategory = async (req, res, next ) => {

    const id = req.params.id
    console.log(id)

    const db = getDb()

    try {
        const result = db.collection("categories").deleteOne( { "_id" : ObjectId(id) })
        .then(res =>{
            console.log(res)
        })

        console.log(result)

        const response = {
            error: false,
            status: 202,
            statusText: "Accepted",
        }

        res.status(200).send(response)

     } catch (e) {
        console.log(e);
        return res.status(204).json({
            error: true,
            message: "Delete request failed, please verify the item identification"
        })
     }
    

    next()
}

module.exports = deleteCategory