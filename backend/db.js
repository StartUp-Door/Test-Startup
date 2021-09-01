const Pool = require("pg").Pool

const pool = new Pool ({
    user:"postgres",
    password:"wonder",
    port:5432,
    database:"testdb"
})


module.exports = pool;