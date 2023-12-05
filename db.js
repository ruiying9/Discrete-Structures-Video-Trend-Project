const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '34.173.221.22',
  user     : 'root',
  password : 'test1234',
  database : 'mydatabase'
});

const search = async (term, sortBy = 'Video_ID', order = 'ASC') => {
  const query = "SELECT * FROM Video WHERE Video.Title LIKE ? ORDER BY ?? " + order;
  const results = await connection.query(query, [`%${term}%`, sortBy]);
  return results;
}


connection.connect((err) => {
  if (err) throw err;
});

connection.on('connect', () => {
    console.log('Database connection established successfully.');
  });

module.exports = {
  connection,
  search
};