var express = require('express');
var router = express.Router();

/* DELETE info card */
router.delete('/', function(req, res, next) {
  res.send('The info card has been deleted.');
});

module.exports = router;
