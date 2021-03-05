const express = require('express')
const router = express.Router()
const routes = require("./routes")
require("dotenv").config();

const app = express()

const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.static('public'));

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

app.use("/", routes)


app.listen(PORT, () => console.log('Server started on port 3000'))