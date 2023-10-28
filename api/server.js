require('dotenv').config()

const express = require ('express')
const itemsRoute = require('./routes/items')

// express app
const app = express();

// Middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/items', itemsRoute)


// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening port 4000')
})

process.env

app.get('/groceries', (req, res) => {
    res.send([{
        item: 'Pet Lethe',
        quantity: 50,
    },{
        item: 'Training Vouchers',
        quantity: 174,
    }])
})