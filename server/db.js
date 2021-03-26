const Pool = require("pg").Pool
require('dotenv').config()
const pool = new Pool({
 user: "saziz028",
 password: process.env.PASSWORD,
 host: process.env.HOST,
 port: process.env.PORT,
 database: process.env.DATABASE
})

module.exports = pool;