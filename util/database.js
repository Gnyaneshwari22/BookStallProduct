// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "chidkya@28",
//   database: "node-complete",
// });

const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "chidkya@28", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
