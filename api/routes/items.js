const express = require('express')

const router = express.Router()

const test = [{
    item: 'Pet Lethe',
    quantity: 50,
},{
    item: 'Training Vouchers',
    quantity: 174,
},{
    item: 'Strong Scrolls',
    quantity: 12,
}];

router.get('/',(req,res, next) => {
    const {item} = req.params;
    const {quantity} = req.query;
    const parsedQuantity = parseInt(quantity)

    const storeItem = test.find((i) => i.quantity < quantity)
    const storeItem2 = test.filter((i) => i.quantity < quantity)
    console.log(storeItem2)
    res.sendStatus(200)
    }
)

router.post('/' , express.json(), (req, res) => {
    console.log(req.body);
    test.push(req.body)
    res.sendStatus(201)
})

module.exports = router