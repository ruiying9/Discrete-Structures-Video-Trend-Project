const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');

router.get('/', function(req, res, next) {
  res.render('results');
});


router.post('/delete', videoController.deleteVideo);
/* GET result page. */

module.exports = router;
