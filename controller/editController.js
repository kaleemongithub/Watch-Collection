const asyncHandler = require("express-async-handler")
const watchData = require("../Models/watchData")

const getwat =  (req, res) => {
  res.render("delete")
}

const deleteWatch = asyncHandler(async (req, res) => {
  const deleted = await watchData.findOne(req.params.id)
  if (!deleted) {
    res.status(404)
    throw new Error("watch not found")
  }
  await watchData.deleteOne(req.params.id)
  res.send("<h1> SUCCESSFULLY DELETED </h1>")
})
module.exports = { getwat, deleteWatch }
