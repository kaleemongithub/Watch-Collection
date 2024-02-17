const mongoose = require("mongoose")

const connectDB = async function () {
  try {
    const connect = await mongoose.connect(process.env.DB)
    console.log("Connected", connect.connection.host, connect.connection.name)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB