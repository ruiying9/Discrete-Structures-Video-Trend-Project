const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');

router.get('/results', (req, res) => {
  const term = req.query.term;

  videoController.searchVideos(term, sortBy, order, (results) => {
      res.render('results', { videos: results });
  });
});

//router.post('/:id', videoController.saveVideo);

module.exports = router;
