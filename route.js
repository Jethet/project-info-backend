const express = require('express')
const router = express.Router()


// define the home route
router.get('/', function (req, res) {
  res.send('Home page')
})

// define the about route
router.get('/about', function (req, res) {
  res.send('Everything about everything page')
})

module.exports = router