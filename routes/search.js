var express = require('express');
var router = express.Router();

/* GET info card on keyword. */
router.get('/', function(req, res, next) {
  res.send("This is the search page");
});

module.exports = router;
