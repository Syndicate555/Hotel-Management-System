const Pool = require("pg").Pool
const pool = new Pool({
 user: "saziz028",
 password: "*142053Mohammad",
 host: "web0.eecs.uottawa.ca",
 port: "15432",
 database: "saziz028"
})

module.exports = pool;