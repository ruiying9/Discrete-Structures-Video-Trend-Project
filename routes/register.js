var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

// Route for handling user registration
router.post('/', userController.addUser);

module.exports = router;
