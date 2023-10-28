const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemname: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    quantity: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        default: 0,
    },
    price: {
        type: mongoose.SchemaTypes.Decimal128,
        required: true,
    },
})

module.exports = mongoose.model('items', ItemSchema);