var router = require('express').Router();
var Day = require('../models').Day;

router.get('/', function(req, res, next) {
    Day.findAll()
        .then(function(days) {
            res.send(days)
            console.log("You GOT all the days")
        })
        .catch(next);
})
router.get('/:id', function(req, res, next) {
    Day.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(day) {
            res.send(day)
        })
        .catch(next);
})

router.delete("/:id", function(req, res, next) {
    Day.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(day) {
            res.redirect("/days")
        })
        .catch(next);
})

router.post("/", function(req, res, next) {
    Day.create(
            req.body
        )
        .then(function(day) {
            res.status(201).send(day)
            console.log("You created a day")
        })
        .catch(next);
})


router.post('/:id/restaurants', function(req, res, next) {
    Day.create({


    })
})




module.exports = router;