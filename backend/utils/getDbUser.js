const getDb = require('./database').getDb

const getUser = async (email) =>{

    const db = getDb()
    const dbusers = await db.collection('users').find().toArray()

    const acc = dbusers.filter(res=>{
        return res.email = email
    })

    console.log("fetched user from getUser",acc)
    return acc
    
}

module.exports = getUser