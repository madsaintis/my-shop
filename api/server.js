require('dotenv').config()
require('./database')
const express = require ('express')
const itemsRoute = require('./routes/items')
const charactersRoute = require('./routes/characters')

// express app
const app = express();

// Middleware

// Routes
app.use('/api/items', itemsRoute)
app.use('/api/characters', charactersRoute)

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening port 4000')
})

process.env
