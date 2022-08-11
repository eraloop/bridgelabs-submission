// require("@babel/polyfill");
require('dotenv').config()

const express = require("express")

const bcrypt = require('bcrypt');
const mongodb = require("mongodb")
// const cors = require("cors")
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser')

const port  = process.env.PORT || 3000

// routes
const users = require('./routes/user')
const categories = require('./routes/categories')

// db connection
const { mongoConnect } = require('./utils/database')

const app = (express())

app.use(cookieParser());
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// app.use(cors({
//     origin: '*',
//     credentials: true
// }))

// routes
app.use('/api/user', users)
app.use('/api/category', categories)


mongoConnect(()=>{
    app.listen(port)
})