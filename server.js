const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const diets= require("./routes/diets")
const path = require('path');
require("dotenv").config( { path: "./config.env" } )

// CONNECT TO DB
connectDB()

// INITIATE APP
const app = express()



// HANDLE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/api/persons", persons)


// SERVE STATIC FILES



// START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));