const express = require('express')
const router = express.Router()

// const User = require('../../../models/users/UserModel')
// // middleware imports 
// const checkAndVerifyToken = require('../../../middlewares/verifyTokens')
// const verifyUserAuth = require("../../../middlewares/verifyUserAuth")

// controller imports 
const createCategory = require("../controllers/categories/create")
const readCategory = require("../controllers/categories/read")
const deleteCategory = require("../controllers/categories/delete")
const updateCategory = require("../controllers/categories/update")


// routes
router.post('/create', createCategory )
router.get('/read', readCategory )
router.put(`/update/${id}`,  updateCategory )
router.post(`/delete/${id}`, deleteCategory)


module.exports = router