var express = require("express");
var bodyParser = require("body-parser");
var logger = require('../logging/logger'),

app = express();

// Put all API endpoints under '/api'
app.get('/', (req, res) => {
  
  res.send('We are in a subroute');

});

module.exports = app;