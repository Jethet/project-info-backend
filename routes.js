const express = require("express");
const { Pool } = require("pg");
const router = express.Router();

const pool = new Pool({
  user: process.env.PGUSER,
  host: "localhost",
  database: "info_inspiration",
  password: process.env.PGPASSWORD,
  port: 5432,
});


// define the home route
router.get("/", function (req, res) {
  res.send("This is the homepage");
});

router.get("/overview", function (req, res) {
  pool
    .query("SELECT * FROM info_cards;")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

// define the about route SELECT * FROM info_cards WHERE card_tag LIKE 'F%';
router.get("/search/:tag", function (req, res) {
  const searchTag = req.query.tag
  pool
    .query("SELECT * FROM info_cards WHERE card_tag=$searchTag;", [searchTag])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

router.post("/create", function (req, res) {
  const card_title = req.body.card_title
  const card_content = req.body.card_content
  const card_tag = req.body.card_tag

  pool
  .query("INSERT INTO info_cards (card_title, card_content, card_tag) VALUES ($1, $2, $3);", [card_title, card_content, card_tag ])
  .then(() => res.send(`New item ${card_title} has been created.`))
  .catch((e) => console.error(e))
});

router.put("/edit", function (req, res) {
  res.send("Your edit has been saved.");
});

router.delete("/delete", function (req, res) {
  res.send("The item has been deleted.");
});

module.exports = router;
