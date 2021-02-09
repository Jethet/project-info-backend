var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all info cards. */
router.get('/overview', function(req, res, next) {
  res.render("This is the overview page");
});

/* GET info card on keyword. */
router.get('/', function(req, res, next) {
  res.send("This is the search page");
});

/* POST: create info card. */
router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
});

/* PUT: edit info card. */
router.put('/edit', function(req, res, next) {
  res.send("This is the edit page");
});

/* DELETE info card */
router.delete('/', function(req, res, next) {
  res.send('The info card has been deleted.');
});


module.exports = router;
