const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');


/* GET result page. */
router.get('/', function(req, res, next) {
    res.render('results');
  });

/* Create one user */
router.post('/', userController.addUser);

/* GET one user */
router.get('/:id',userController.getUser);

/* Update one user */
router.put('/:id', userController.updateUser);

/* GET one user */
router.delete('/:id',userController.deleteUser);

module.exports = router;
