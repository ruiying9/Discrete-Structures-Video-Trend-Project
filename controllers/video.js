// routes/videos.js
const express = require('express');
const router = express.Router();
const db = require('../db.js');

exports.searchVideos = function(req, res) {
  const term = req.query.term;
  const sortBy = req.query.sortBy;
  const order = req.query.order;
  
  db.search(term, sortBy, order, function(results) {
    res.render('results', { videos: results });
  });
};

exports.saveVideo = function(req, res) {
  const videoId = req.params.id; // The ID of the video to save, sent from the frontend

  db.saveVideoForUser(videoId, function(results) {
    res.redirect('/favorites');
  });
};

exports.deleteVideo = function(req, res) {
  const videoId = req.params.id; // ID of the video to delete

  db.deleteVideoForUser(videoId, function(results) {
    res.redirect('/favorites');
  });
};



// ... other video routes ...

module.exports = router;

