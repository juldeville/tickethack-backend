var express = require('express');
const { lchownSync } = require('fs');
var router = express.Router();
const moment = require('moment')

const Trip = require('../models/trips')


router.post('/', (req, res) => {
    console.log("req.body.date", req.body.date)
    Trip.find({
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: req.body.date
    }).then(data => {
        if (data.length > 0) {
            res.json({result: true, newTrip: data})
        } else {
            res.json({result: false, error: 'no trip found'})
        }
    })
})


module.exports = router;
