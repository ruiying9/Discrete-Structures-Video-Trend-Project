// controllers/video.js

// routes/videos.js
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');
const db = require('../db.js');

exports.searchVideos = function(req, res) {
  const term = req.query.term;
  const sortBy = req.query.sortBy;
  const order = req.query.order;
  
  db.search(term, sortBy, order, function(results) {
    res.render('videos', { videos: results });
  });
};

exports.saveVideo = function(req, res) {
  const userId = req.user.id; // Assuming you have authentication and the user's ID is available
  const videoId = req.body.videoId; // The ID of the video to save, sent from the frontend

  db.saveVideoForUser(userId, videoId, function(results) {
    res.json({ success: true, message: "Video saved successfully." });
  });
};

exports.deleteVideo = function(req, res) {
    const userId = req.user.id; // Assuming user authentication
    const videoId = req.body.videoId; // ID of the video to delete

    db.deleteVideoForUser(userId, videoId, function(results) {
        res.json({ success: true, message: "Video deleted successfully." });
    });
};



// ... other video routes ...

// Route to handle saving a video
router.post('/save', videoController.saveVideo);

module.exports = router;

