const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas");
    })
  }
  catch (err) {
    console.error(err.message)
    console.log("FIX THE DB CONNECTIVITY CODE OR MONGODB URL/USERNAME/PASSWORD!!!")
    // process.exit(1)
  }
}

module.exports = connectDB

// green-barracuda-tux