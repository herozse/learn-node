const mysql = require("mysql");

const pool = mysql.createPool({
  host: "43.139.104.161",
  port: "3306",
  user: "test1",
  password: "test1",
  database: "custom",
  connectionLimit: 20,
  multipleStatements: true
});

module.exports = pool