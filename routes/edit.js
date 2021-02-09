var express = require('express');
var router = express.Router();

/* GET users listing. */
router.put('/edit', function(req, res, next) {
  res.send("This is the edit page");
});

module.exports = router;
