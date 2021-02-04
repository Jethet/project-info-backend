var express = require('express');
var router = express.Router();

/* GET all info cards. */
router.get('/overview', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
