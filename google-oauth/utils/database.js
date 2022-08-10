const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
// const { getDb } = require('../utils/database')


let _db

const mongoConnect = (callback) =>{

    MongoClient.connect("mongodb+srv://eraloop:eraloop360@cluster0.7vo0ltr.mongodb.net").then( client=>{
        console.log("connected")
<<<<<<< HEAD:backend/utils/database.js
        _db = client.db('register-login-logout')
=======
        _db = client.db('google-oauth')
>>>>>>> 9e7a30b736f15b12d883b8fab67288512a91c4e2:google-oauth/utils/database.js
        callback()
    }).catch(err=>{
        console.log("database connection error",err)
        // throw err
    })
}

const getDb = ()=>{
    if(_db){
        return _db
    }
    throw 'No database found'
}


exports.mongoConnect = mongoConnect
exports.getDb = getDb