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
    },

    BMI :{
        type:Number,
        required:true,
        unique:true
    },

    weight:{
        type:Number,
        required:true,
        unique:true
    },

    availibility:{
        type:Number,
        required:true,
        unique:true
    }


    

    }
);

const DietModel =mongoose.model('DietData', DietSchema );
module.exports =DietModel;