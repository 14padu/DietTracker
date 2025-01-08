const mongoose = require ('mongoose');

const connectDB = async() => {

    try{

        await mongoose.connect(
            'mongodb+srv://diet_tracker_admin:diet_tracker_admin@diet-tracker.jsni9.mongodb.net/?retryWrites=true&w=majority&appName=diet-tracker');

        console.log("connected to mongoDB");
    } catch(err){
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);

    }
};
module.exports =connectDB;