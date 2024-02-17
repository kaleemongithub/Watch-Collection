const express = require("express")
const { getAllWatches } = require("../controller/data")
const router = express.Router()



router.route("/").get(getAllWatches)

module.exports = router