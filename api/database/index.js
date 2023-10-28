const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB_URI,)
.then(() => {
    console.log("Successfully connected to DB")
})
.catch(() => {
    console.log("wrong")
})
