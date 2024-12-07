const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
    name: {
        type: Number,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        unique:true
        
    },

    contact_number :{
        type: Number,
        required: true,
        unique:true
    }
    

    }
);

const Diet = mongoose.model('Diet', DietSchema);
module.exports = Diet; // Corrected here