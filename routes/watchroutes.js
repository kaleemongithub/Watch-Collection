const express = require("express")
const { getWatch, postWatch } = require("../controller/userController")
const router = express.Router()


router.route("/").get(getWatch).post(postWatch)

module.exports = router