require("@babel/polyfill");
require('dotenv').config()

const express = require("express")
const bcrypt = require('bcrypt');
const mongodb = require("mongodb")
const cors = require("cors")
// const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const kill = require('kill-port')

const port  = process.env.PORT

// routes
// normal user routes
const userInfoRoutes = require('./routes/user/account/index')
const userStoryRoutes = require('./routes/user/story/index')
// contributor routes
const contributorStoryRoutes = require('./routes/contributor/story/index')
// admin routes
const adminRoutes = require('./routes/admin/index')

// db connection
const { mongoConnect } = require('./utils/database')

const app = (express())
app.use(cookieParser());
app.use(express.json({
    limit: '50mb'
}))

app.use(cors({
    origin: '*',
    credentials: true
}))

app.use('/user', userInfoRoutes)
app.use('/user', userStoryRoutes)
app.use('/contributor', contributorStoryRoutes)
app.use('/admin', adminRoutes)


mongoConnect(()=>{
    app.listen(port)
})