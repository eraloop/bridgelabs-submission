// const express = require('express')
// const router = express.Router()

// const getDb = require('../../utils/database').getDb
// const {hashPassword, generateJWT, generateRefreshToken }  = require('../../utils/token')
// const UserModel = require("../../models/UserModel").UserSchema


// const registerUser = async (req, res, next)=>{
//     if(req.body === {}){
//         return
//     }
//     req.body.password  = hashPassword(req.body.password)
//     // req.body.password = await bcrypt.hash(req.body.password, salt)

//     userData = {
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         password: req.body.password,
//         regionOfOrigin: req.body.regionOfOrigin,
//         division: req.body.division,
//         subdivision: req.body.subdivision
//     }

//     console.log(userData)

//     if((userData.name == '' || userData.email == '' || userData.phone == '' || userData.password == '' || userData.regionOfOrigin == '' || userData.division == '' || userData.subdivision=='')){
//         return res.json({
//             error: true,
//             message: "Important user data not provided, please resubmit form, if this persist, contact customer service: 673572533"
//         })
//     }

//     const user = new UserModel(userData)
//     const db = getDb()
//     const dbusers = await db.collection('users').find().toArray()

//     if(typeof dbusers !== 'undefined' && dbusers.length === 0){
        
//         registerUser(userData)

//     }else{
//         dbusers.forEach( usr =>{

//             if(usr.email === userData.email || usr.phone == userData.phone){
//                 res.send("User already exist with this email or phone")
//                 return
//             }

//             registerUser(userData)

//         })
//     }
// }

// module.exports = registerUser