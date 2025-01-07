const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    BMI: {
        type: Number,
        required: true
    },
    contact_number: {
        type: String,
        required: true,
        unique: true
    },
    
    
});

const DietModel = mongoose.model('DietData', DietSchema);
module.exports = DietModel;
