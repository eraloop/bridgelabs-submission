const getDb = require('../utils/database').getDb

class UserSchema {
     constructor({id,name,email, avatar}){
      this.name = name,
      this.avatar = avatar,
      this.id = id,
      this.email = email  
    }

  save(){
    const db = getDb()
    db.collection('users').insertOne(this).then(res=>{
      return res
    })
  }

  findUser(data){
    const db = getDb()
    db.collection('user').find({"username" : data}).then(result =>{
      console.log(result)
    })
  }


}

exports.UserSchema = UserSchema