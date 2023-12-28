// backend/config/database.js

const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rentalmobil',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
