const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');


/* GET result page. */
router.get('/', function(req, res, next) {
    res.render('results');
  });
module.exports = router;
