const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const router = require("./routes/dietRoutes");
const path = require('path');
require("dotenv").config({ path: "./config.env" });

// CONNECT TO DB
connectDB();

// INITIATE APP
const app = express();

// HANDLE MIDDLEWARE
app.use(express.json());
app.use(cors());

// Basic route for home page
app.get("/home", (req, res) => {
    res.send("WELL_COME TO DIET TRACKER PROJECT");
});




// Use clinic routes with prefix '/api'
app.use('/api', router);

// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

// START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));
