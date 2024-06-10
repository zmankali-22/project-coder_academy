const express = require("express")
const router = express.Router()


const HomeRouter = require("./controllers/home")

router.use("/", HomeRouter)


module.exports = router
