const express = require('express')

const router = express.Router()

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

router.post('/' , express.json(), async (req, res) => {
    const {}
})

module.exports = router