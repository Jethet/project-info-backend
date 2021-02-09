var express = require('express');
var router = express.Router();

/* GET all info cards. */
router.get('/overview', function(req, res, next) {
  res.send("This is the overview page");
});

module.exports = router;
