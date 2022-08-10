
const getDb = require('../utils/database').getDb

class UserSchema {
     constructor({name, avatar, description, created_at}){
      this.name = name,
      this.avatar = avatar,
      this.description = description,
      this.created_at = created_at
    }

  save(){
    const db = getDb()
    db.collection('users').insertOne(this).then(res=>{
      console.log(res)
    })
  }

  // findUser(data){
  //   const db = getDb()
  //   db.collection('user').find({"username" : data}).then(result =>{
  //     console.log(result)
  //   })
  // }


}

exports.UserSchema = UserSchema