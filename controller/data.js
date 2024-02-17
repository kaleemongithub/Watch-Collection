const asyncHandler = require("express-async-handler")
const watchData = require("../Models/watchData")
const { log } = require("console")

const getAllWatches = asyncHandler(async (req, res) => {
  const data = await watchData.find()
  if (!data) {
    res.status(404)
    throw new Error("Not Found")
  }
  const newArr = []
  data.forEach((element) => {
    // let watch = [
    //   {
    //     name: element.name,
    //     price: element.price,
    //     date: element.date,
    //   },
    // ]
    newArr.push(element.name)
  })
  console.log(newArr)

  res.json(data)
})

module.exports = { getAllWatches }
