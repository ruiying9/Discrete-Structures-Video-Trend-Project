// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.173.221.22',
  user: 'root',
  password: 'test1234',
  database: 'mydatabase'
});

// Function to set up the database (create stored procedure and trigger)
const setupDatabase = () => {
  const createProcedure = `
    CREATE PROCEDURE UpdateVideoRating(IN videoID INT)
    BEGIN
      DECLARE newLikes INT;
      SELECT Likes + 1 INTO newLikes FROM Engagement_metrics WHERE Video_id = videoID;
      UPDATE Engagement_metrics SET Likes = newLikes WHERE Video_id = videoID;
    END;
  `;

  const createTrigger = `
    CREATE TRIGGER AfterUserInteraction AFTER INSERT ON VideoUserInteraction
    FOR EACH ROW
    BEGIN
      IF NEW.Interaction_Type = 'like' THEN
        CALL UpdateVideoRating(NEW.VideoID);
      END IF;
    END;
  `;

  // Run the SQL for creating the stored procedure and trigger
  connection.query(createProcedure, (error, results, fields) => {
    if (error) throw error;
    console.log('Stored procedure created successfully.');
  });

  connection.query(createTrigger, (error, results, fields) => {
    if (error) throw error;
    console.log('Trigger created successfully.');
  });
};

// Establish the database connection and set up the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
  setupDatabase();
});

const search = (term, sortBy = 'Video_ID', order = 'ASC', callback) => {
  const query = `SELECT * FROM Video WHERE Title LIKE ? ORDER BY ?? ${order}`;
  connection.query(query, [`%${term}%`, sortBy], function(error, results, fields) {
    if (error) throw error;
    callback(results);
  });
};

const saveVideoForUser = (userId, videoId, callback) => {
  const query = "INSERT INTO SavedVideos (userId, videoId) VALUES (?, ?)";
  connection.query(query, [userId, videoId], function(error, results, fields) {
    if (error) throw error;
    callback(results);
  });
};

module.exports = {
  connection,
  search,
  saveVideoForUser
};
