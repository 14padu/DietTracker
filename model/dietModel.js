const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
        // unique: true // Uncomment if you want to enforce uniqueness on age
    },
    admit_Date: {
        type: Date,
        required: true
    }
});

const Diet = mongoose.model('Diet', DietSchema);
module.exports = Diet; // Corrected here