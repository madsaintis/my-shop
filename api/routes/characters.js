const express = require('express')
const Character = require('../database/schemas/Character')

const router = express.Router()

router.get('/',(req,res, next) => {
    // const {item} = req.params;
    // const {quantity} = req.query;
    // const parsedQuantity = parseInt(quantity)

    // const storeItem = test.find((i) => i.quantity < quantity)
    // const storeItem2 = test.filter((i) => i.quantity < quantity)
    // console.log(storeItem2)
    // res.sendStatus(200)
    }
)

router.post('/' , express.json(), async (req, res) => {
    const {name, type, job, level, price} = req.body;
    const charactersDB = await Character.findOne({name});

    if(charactersDB) {
        res.status(400).send("Ish ish ish")
    }  else {
        const newItem = Character.create({name, type, job, level, price})
        res.status(200).send("Character added to database")
    }

})

module.exports = router