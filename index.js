const env = require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const watchData = require("./Models/watchData")
const connectDB = require("./config/DB")
const errorHandler = require("./middleware/errorHandler")

connectDB()

const app = express();

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(errorHandler)
app.use("/all",require("./routes/allroute"))
app.use("/delete",require("./routes/editroute"))


app.use("/", require("./routes/watchroutes"))
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html")
// })
const port = process.env.PORT || 5000

// app.post("/", function (req, res) {
//   const watchBrand = req.body.brand
//   const watchPrice = req.body.price
//   const watchDate = req.body.date

//   const newWatch = new watchData({
//     name: watchBrand,
//     price: watchPrice,
//     date: watchDate,
//   })
//   newWatch.save()
// })

app.listen(port, () => {
  console.log("Started")
})
