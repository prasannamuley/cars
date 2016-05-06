'use strict';

var application = require('../controllers/application');
var api = require('../controllers/api');

module.exports = function (app) {
  app.use('/', application);
  app.use('/api', api);
}