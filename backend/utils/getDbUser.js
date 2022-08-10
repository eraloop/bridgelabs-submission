const getDb = require('../utils/database').getDb

const getUser = async (email) =>{

    const db = getDb()
    const dbusers = await db.collection('usersTable').find().toArray()

    const acc = dbusers.filter(res=>{
        return res.email = email
    })

    console.log("fetched user from getUser",acc)
    return acc
    
}

module.exports = getUser