const express = require('express')
const Character = require('../database/schemas/Character')

const router = express.Router()

router.get('/', async (req,res, next) => {
    const characters = await Character.find();
    res.status(200).json(characters.map(char => char.toObject()));
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