var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

// user verification 
router.get('/', userController.getUser, (req, res) => {
  res.render('index');
});

module.exports = router;
