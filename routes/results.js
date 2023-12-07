var express = require('express');
var router = express.Router();
var videoController = require('../controllers/video');

router.get('/results', (req, res) => {
  var term = req.query.term;

  videoController.searchVideos(term, sortBy, order, (results) => {
      res.render('results', { videos: results });
  });
});

//router.post('/:id', videoController.saveVideo);

module.exports = router;
