const express = require("express")
const { getwat, deleteWatch } = require("../controller/editController")
const router = express.Router()

router.route("/").get(getwat)
router.route("/:params").delete(deleteWatch)

module.exports = router
