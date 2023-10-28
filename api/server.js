require('dotenv').config()

const express = require ('express')
const itemsRoute = require('./routes/items')

// express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.text());

app.use((req, res, next) => {
    console.log("first middleware")
    next()
})

// Routes
app.use('/api/items', itemsRoute)


// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening port 4000')
})

process.env
