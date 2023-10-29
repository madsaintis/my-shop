const express = require('express')
const Item = require('../database/schemas/Item')

const router = express.Router()

router.get('/', async (req, res) => {
    const items = await Item.find();
    res.status(200).json(items);
    }
)

router.post('/' , express.json(), async (req, res) => {
    const { itemname, quantity, price} = req.body;
    const itemsDB = await Item.findOne({itemname});

    if(itemsDB) {
        res.status(400).send("Ish ish ish")
    }  else {
        const newItem = Item.create({ itemname, quantity, price})
        res.status(200).send("Item added to databases")
    }
})

module.exports = router