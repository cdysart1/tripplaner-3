var router = require('express').Router();
var Restaurant = require('../models').Restaurant;

router.get('/', function(req, res, next) {
    Restaurant.findAll()
        .then(function(restaurants) {
            res.send(restaurants)
        })
        .catch(next);
});



module.exports = router