require('dotenv').config()
require('./database')
const express = require ('express')
const itemsRoute = require('./routes/items')
const charactersRoute = require('./routes/items')

// express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.text());

// Routes
app.use('/api/items', itemsRoute)
app.use('/api/characters', charactersRoute)

app.use((req, res, next) => {
    console.log("first middleware")
    next()
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening port 4000')
})

process.env
