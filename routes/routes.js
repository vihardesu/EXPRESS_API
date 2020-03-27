var express = require("express")
var apiRouter = express();

apiRouter.use("/subroute", require('./subroute'));

module.exports = apiRouter;