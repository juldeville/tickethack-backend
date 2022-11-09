var express = require('express');
const { lchownSync } = require('fs');
var router = express.Router();
const moment = require('moment')

const Trip = require('../models/trips')


router.post('/', (req, res) => {
    const {departure, arrival, date} = req.body
    const dateObj = new Date(date)
    moment(dateObj).format('YYYY/MM/DD')
    let dateObjPlus = new Date(date);
    moment(dateObjPlus).format('YYYY-MM-DD')
    dateObjPlus.setDate(dateObjPlus.getDate() + 1)

    Trip.find({
        departure,
        arrival,
        date: {$gte : dateObj, $lt: dateObjPlus}
    }).then(data => {
        if (data.length > 0) {
            res.json({result: true, newTrip: data})
        } else {
            res.json({result: false, error: 'no trip found'})
        }
    })
})


module.exports = router;







