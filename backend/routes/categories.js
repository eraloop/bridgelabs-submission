const express = require('express')
const router = express.Router()

// const User = require('../../../models/users/UserModel')
// // middleware imports 
// const checkAndVerifyToken = require('../../../middlewares/verifyTokens')
// const verifyUserAuth = require("../../../middlewares/verifyUserAuth")

// controller imports 
const loginUser = require("../../../controllers/users/login")
const registerUser = require("../../../controllers/users/register")
const becomeContributor = require("../../../controllers/users/becomeContributor")
const resetPassword = require("../../../controllers/users/resetPassword")
const editInfo = require("../../../controllers/users/editInfo")
const getCategories = require("../../../controllers/users/getCategories")


// routes
router.post('/login', loginUser )
// router.post('/user/logout',checkAndVerifyToken,  logoutUser )
router.post('/register',  registerUser )
router.post('/user/editInfo/:email', editInfo)
router.put('/become-contributor', becomeContributor )
router.post('/user/resetPassword',resetPassword )

router.get('/get-categories', getCategories)
module.exports = router