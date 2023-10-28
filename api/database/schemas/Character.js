const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
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
    
})

module.exports = mongoose.model('characters', CharacterSchemaSchema);