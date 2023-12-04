const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '34.173.221.22',
  user     : 'root',
  password : 'test1234',
  database : 'mydatabase'
});

connection.connect((err) => {
  if (err) throw err;
});

connection.on('connect', () => {
    console.log('Database connection established successfully.');
  });

module.exports = connection;
