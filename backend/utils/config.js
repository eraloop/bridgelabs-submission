require('dotenv').config()
// const { env } = process
const fs   = require('fs');

// var privateKEY  = fs.readFileSync('./auth_keys/privateKey.txt', 'utf8');
// var publicKEY  = fs.readFileSync('./auth_keys/publicKey.txt', 'utf8');

// console.log(process.env)

module.exports = {
    name: process.env.APP_NAME,
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL,
    TOKEN_PRIVATE_KEY: process.env.JWT_TOKEN_PRIVATE_KEY,
    REFRESH_TOKEN_PRIVATE_KEY: process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
    SALT : process.env.SALT
}