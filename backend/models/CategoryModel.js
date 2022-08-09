
const Role = require('../../utils/roles')
const getDb = require('../../utils/database').getDb

class CategorySchema {
     constructor({name, email, phone, password, regionOfOrigin, division, subdivision}){
      this.role = Role.USER,
      this.name = name,
      this.email = email,
      this.phone = phone,
      this.password = password,
      this.regionOfOrigin = regionOfOrigin,
      this.division = division,
      this.subdivision = subdivision
    }

  save(){
    const db = getDb()
    db.collection('users').insertOne(this).then(res=>{
      console.log(res)
    })
  }

}

exports.CategorySchema = CategorySchema