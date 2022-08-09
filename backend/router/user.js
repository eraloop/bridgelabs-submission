const express = require('express')
const router = express.Router()

// const User = require('../../../models/users/UserModel')
// // middleware imports 
// const checkAndVerifyToken = require('../../../middlewares/verifyTokens')
// const verifyUserAuth = require("../../../middlewares/verifyUserAuth")

// controller imports 
const loginUser = require("../../../controllers/users/login")
const registerUser = require("../../../controllers/users/register")
const logoutUser = require("../../../controllers/users/logoutUser")


// routes
router.post('/login', loginUser )
router.post('/register',  registerUser )
router.post('/logout', logoutUser)


module.exports = router