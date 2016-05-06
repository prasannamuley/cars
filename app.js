var express = require('express');

var app = express();

// app configuration view, static path etc
require('./middlewares/config')(app);

// handle all routes
require('./middlewares/routes')(app);

// catch all errors
require('./middlewares/catch')(app);

module.exports = app;