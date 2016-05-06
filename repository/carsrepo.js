'use strict';

var cars = require('./db.json');

var getAll = function(cb) {
  cb(null, cars);
};

var findById = function(id, cb) {
  var car = cars.filter(function(car) {
    return car.Id === id;
  });
  cb(null, car);
};

module.exports = {
  getAll,
  findById,
};