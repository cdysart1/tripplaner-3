var router = require('express').Router();
var Activity = require('../models').Activity;


router.get('/', function(req, res, next) {
    Activity.findAll()
        .then(function(activities) {
            res.send(activities)
        })
        .catch(next);
});



module.exports = router