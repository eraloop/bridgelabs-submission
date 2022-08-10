
const Role = require('../../utils/roles')
const getDb = require('../../utils/database').getDb

class CategorySchema {
  constructor({name, avatar, description, created_at}){
    this.name = name,
    this.avatar = avatar,
    this.description = description,
    this.created_at = created_at
  }

  save(){
    const db = getDb()
    db.collection('categories').insertOne(this).then(res=>{
      console.log(res)
    })
  }

}

exports.CategorySchema = CategorySchema