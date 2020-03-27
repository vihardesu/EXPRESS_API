var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var logger = require('./logging/logger');
var cors = require("cors");

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Main Route
app.get("/", function(req, res) {
  	logger.info('Inside the main route for the Express Server')
  	res.send('Inside the main route for the Express Server');
})

//API Sub Route
app.use("/api", require("./routes/routes"));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  logger.info('Inside the catchall route')
  res.send('Express API');
});

app.listen(port, function(err) {
    logger.info("running server on from port:::::::" + port);
});