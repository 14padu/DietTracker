const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: number,
        required: true
        
    },

    contact_number :{
        type: String,
        required: true
    }
    

    }
);

const Diet = mongoose.model('Diet', DietSchema);
module.exports = Diet; // Corrected here