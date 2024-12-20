const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './config.env' });

const connectDB = async () => {
    try {
        const DB = process.env.DATABASE;
        console.log('Connecting to:', DB); // Log the URI for debugging

        const conn = await mongoose.connect('mongodb+srv:diet_tracker_admin:diet_tracker_admin@diet-tracker.jsni9.mongodb.net/?retryWrites=true&w=majority&appName=diet-tracker'
            );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;