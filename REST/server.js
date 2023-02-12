var express = require("express");
var app = express();

// Serve static files like images, CSS and JS files: use express.static middleware

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get("/crazy", (req, res) => {
    res.send("still crazy?")
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
