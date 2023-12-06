const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');

router.get('/search', videoController.searchVideos);
module.exports = router;
