const mongoose = require("mongoose")

const watchSchema = new mongoose.Schema({
  name: String,
  date: String,
  price: Number,
})

module.exports = mongoose.model("Watch",watchSchema)