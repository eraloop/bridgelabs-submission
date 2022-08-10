
const getDb = require('../utils/database').getDb

class UserSchema {

     constructor({name, avatar, email, phone, password}){
      this.name = name,
      this.avatar = avatar,
      this.email = email
      this.phone = phone
      this.password = password
    }

  save(){
    const db = getDb()
    db.collection('users').insertOne(this).then(res=>{
      console.log(res)
    })
  }

}

exports.UserSchema = UserSchema