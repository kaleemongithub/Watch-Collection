const asyncHandler = require("express-async-handler")
const watchData = require("../Models/watchData")

const getWatch = asyncHandler(async (req, res) => {
  const data = await watchData.find()
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

  res.render("index",{file:newArr})
})

const postWatch = asyncHandler(async (req, res) => {
  const watchBrand = req.body.brand
  const watchPrice = req.body.price
  const watchDate = req.body.date
  console.log(watchDate)
  if (!watchBrand || !watchDate || !watchPrice) {
    res.status(400)
    throw new Error("All fields are mandatory")
  }

  const newWatch = await watchData.create({
    name: watchBrand,
    price: watchPrice,
    date: watchDate,
  })
  res.send("Added Successfully")
})

module.exports = { getWatch, postWatch }
