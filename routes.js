const express = require('express')
const router = express.Router()


// define the home route
router.get('/', function (req, res) {
  res.send('This is the home page.')
})

router.get("/overview", function (req, res) {
  res.send("This is the total overview of information.")
})

// define the about route
router.get('/search', function (req, res) {
  res.send('This is the page with your search results.')
})

router.post("/create", function (req, res) {
  res.send("New item created.")
})

router.put("/edit", function (req, res) {
  res.send("Your edit has been saved.")
})

router.delete("/delete", function (req, res) {
  res.send("The item has been deleted.")
})

module.exports = router