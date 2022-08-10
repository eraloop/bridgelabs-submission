const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
// const { getDb } = require('../utils/database')


let _db

const mongoConnect = (callback) =>{

    MongoClient.connect("mongodb+srv://eraloop:eraloop360@cluster0.7vo0ltr.mongodb.net").then( client=>{
        console.log("connected")
        _db = client.db('google-oauth')
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

const saveUser = ()=>{
    const db = getDb()
    db.collection('users').insertOne(this).then(res=>{
      console.log(res)
    })
}


exports.mongoConnect = mongoConnect
exports.getDb = getDb
exports.saveUser = saveUser