const express = require('express')
const Item = require('../database/schemas/Item')

const router = express.Router()

router.get('/',(req, res, next) => {
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
    const { itemname, quantity, price} = req.body;
    const itemsDB = await Item.findOne({itemname});

    if(itemsDB) {
        res.status(400).send("Ish ish ish")
    }  else {
        const newItem = Item.create({ itemname, quantity, price})
        res.status(200).send("Item added to database")
    }

})

module.exports = router