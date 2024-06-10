

const express = require("express")
const router = express.Router()


router.get("/", (request, response, next) => {


    return  next (new Error("Error on purpose from root route"))
     res.json({
         message: "Hello world"
     })
 })

 module.exports = router