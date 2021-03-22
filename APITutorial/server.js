// This tutorial creates a small key/value memory database API

const express = require("express");
const PORT = process.env.PORT || 3000;

const db = {};

const app = express();

// Request with key to get value from database:
app.get("/get/:key", (req, res) => {
  res.json({ todo: true });
});

// Check the keys in the databases:
app.get("/dbinfo", (req, res) => {
  const dbKeysCount = Object.keys(db).length
  const info = {
    size: dbKeysCount
  }
  res.json(info);
});

// give the server a URL to listen to:
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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
