const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
    name: {
        type: String, // Corrected from Number to String
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contact_number: {
        type: String, // Phone numbers are better stored as strings to handle leading zeros and large values
        required: true,
        unique: true
    },
    BMI: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    availibility: {
        type: Boolean, // Changed to Boolean as it represents availability
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const DietModel = mongoose.model('DietData', DietSchema);
module.exports = DietModel;
