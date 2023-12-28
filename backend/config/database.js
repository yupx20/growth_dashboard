// backend/config/database.js

const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'rentcar_pbkk',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
