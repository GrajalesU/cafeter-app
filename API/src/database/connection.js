const sql = require('mysql');
const config = require('../config');

const {
  HOST, USER, PASSWORD, DATABASE,
} = config;

const sqlConnection = sql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

sqlConnection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected to database');
});

module.exports = sqlConnection;
