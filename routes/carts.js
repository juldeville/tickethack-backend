var express = require('express');
var router = express.Router();
const Cart = require('../models/cart')

router.post('/', (req, res) => {
    const {departure, arrival, date ,price} = req.body
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
