require('dotenv').config()
const fs   = require('fs');

module.exports = {
    name: process.env.APP_NAME,
    port: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    TOKEN_PRIVATE_KEY: process.env.JWT_TOKEN_PRIVATE_KEY,
    REFRESH_TOKEN_PRIVATE_KEY: process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
    SALT : process.env.SALT
}