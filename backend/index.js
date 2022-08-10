require("@babel/polyfill");
require('dotenv').config()

const express = require("express")

const bcrypt = require('bcrypt');
const mongodb = require("mongodb")
const cors = require("cors")
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser')
// const port  = process.env.PORT

// routes
const users = require('./routes/user')
// const categories = require('./routes/categories')

// db connection
const { mongoConnect } = require('./utils/database')

const app = (express())

app.use(cookieParser());
app.use(express.json({
    limit: '50mb'
}))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({
    origin: '*',
    credentials: true
}))

// routes
app.use('/api/user', users)
// app.use('/user', categories)


mongoConnect(()=>{
    app.listen(3000)
})