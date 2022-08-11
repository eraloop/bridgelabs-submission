
const getDb = require('../../utils/database').getDb

class CategorySchema {
  constructor({title, avatar, description, created_at}){
    this.title = title,
    this.avatar = avatar,
    this.description = description,
    this.created_at = created_at
  }

  save(){
    const db = getDb()
    db.collection('categories').insertOne(this).then(res=>{
      console.log(res)
      return res
    })
  }

  // read(){
  //   const db = getDb()
  //   db.collection('categories').insertOne(this).then(res=>{
  //     console.log(res)
  //     return res
  //   })
  // }
  
  // update(){
  //   const db = getDb()
  //   db.collection('categories').insertOne(this).then(res=>{
  //     console.log(res)
  //     return res
  //   })
  // }

  // delete(){
  //   const db = getDb()
  //   db.collection('categories').insertOne(this).then(res=>{
  //     console.log(res)
  //     return res
  //   })
  // }

}

exports.CategorySchema = CategorySchema