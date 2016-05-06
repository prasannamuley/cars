var express = require('express'),
  router = express.Router(),
  cars = require('../repository/carsrepo');

/* GET cars listing. */
router.get('/getall', function(req, res, next) {
  cars.getAll((err, cars) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(cars);
  });
});

/* GET car by id */
router.get('/get/:id', function(req, res, next) {
  cars.findById(req.params.id, (err, cars) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(cars);
  });
});

module.exports = router;