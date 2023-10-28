const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    type: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: '',
    },
    job: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: '',
    },
    level: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        default: 0,
    },
    reborn: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        default: false,
    },
    price: {
        type: mongoose.SchemaTypes.Decimal128,
        required: true,
    },
    
    
})

module.exports = mongoose.model('characters', CharacterSchema);