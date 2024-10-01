const express = require ( "express")
const connectDB = require ("./config/db.js")
const DietRoutes = require ( "./routes/dietRoutes.js")

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Well-come to my HOME page of DietTracker");
});

app.use('/api',DietRoutes)

app.listen(PORT, () => {
    console.log(`My web process at http://localhost:${PORT}`)
})