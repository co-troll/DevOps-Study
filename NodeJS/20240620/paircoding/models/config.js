const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user: "root",
    password: "1111",
    multipleStatements: true,
    database: "test"
})

module.exports = mysql;