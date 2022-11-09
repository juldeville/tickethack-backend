var express = require('express');
var router = express.Router();
const Cart = require('../models/cart')
const Trip = require('../models/trips')

router.post('/:_id', (req, res) => {
    

    const {departure, arrival, date ,price} = req.params
    const newCart = new Cart({
        departure,
        arrival,
        date,
        price,
    })

    newCart.save().then(data => {
        res.json({result: true, newCart: data})
    })
})



module.exports = router;
