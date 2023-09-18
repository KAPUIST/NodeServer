const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "password", {
  dialect: "mysql",
  hosw: "localhost",
});

module.exports = sequelize;
// mysql

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "password",
// });

// module.exports = pool.promise();
