const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
// const config = require("./config")

let _db

const mongoConnect = (callback) =>{

    MongoClient.connect("mongodb+srv://eraloop:eraloop360@cluster0.izlzgan.mongodb.net/").then( client=>{
        console.log("connected")
        _db = client.db('register-login-logout')
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