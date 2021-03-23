// This tutorial creates a small key/value memory database API

const express = require("express");
const PORT = process.env.PORT || 3000;

const db = {};

const app = express();

app.use(express.json());

// give the server a URL to listen to
app.get("/", (req, res) => {
  // request is the object the server receives
  // response is the object that needs to be populated to send back to the browser/client
  // here the homepage sends back some basic information about the server
  // this has to be in json format because that is the format APIs and systems can use
  res.json({
    appName: process.env.npm_package_name,
    appVersion: process.env.npm_package_version,
  });
});

// JSON body post to populate database
app.post("/set", (req, res) => {
  // get values from the request body in JSON format
  db[req.body.key] = req.body.value;
  res.status(201).json({
    status: "OK",
  });
});

// Request with key to get value from database
app.get("/get/:key", (req, res) => {
  // When there is a request with a key, the key is looked up in the database
  // and whatever value is stored under that key is sent back together with the key
  res.json({ value: db[req.params.key] });
});

// Check the keys in the databases
app.get("/dbinfo", (req, res) => {
  const dbKeys = Object.keys(db);
  const dbKeyCount = dbKeys.length;
  const info = {
    size: dbKeyCount,
  };
  // Query is the part of the URL after the ?
  if ((req.query.details = "true")) {
    // Get all the keys that are in the database and show the values
    info.keys = dbKeys;
  }
  res.json(info);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
