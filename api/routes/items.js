const express = require('express')

const router = express.Router()

const test = [{
    item: 'Pet Lethe',
    quantity: 50,
},{
    item: 'Training Vouchers',
    quantity: 174,
}];

router.get('/', (req, res) => {
    console.log("This is from items api endpoint")
})


router.get('/items', (req,res, next) => {
    console.log("uwu")
    next()
},(req, res) => {
    res.send(test)
})

router.post('/items' , (req, res) => {
    console.log(req.body);
    test.push(req.body)
    res.sendStatus(201)
})

module.exports = router