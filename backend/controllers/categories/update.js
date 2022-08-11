const express = require('express')
var ObjectId = require('mongodb').ObjectId;

const getDb = require('../../utils/database').getDb

const updateCategory = async (req, res, next ) => {

    const id = req.params.id

    const updateData = {
        title : req.body.title,
        description: req.body.description,
        avatar: req.body.avatar,
        created_at: req.body.created_at,
        update_at: req.body.created_at
    }

    const db = getDb()

    try {
        const result = db.collection("categories").updateOne( { "_id" : ObjectId(id) }, {$set: updateData}, { upsert: true } )
        .then(res =>{
            console.log(res)
        })

        console.log(result)

        const response = {
            error: false,
            status: 200,
            statusText: "Item updated successfully",
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

module.exports = updateCategory