// Declare and configure the server

const express = require('express')

const serverInstance = express()

const pokemonRouter = require("./routers/pokemonRoutes.js")


serverInstance.use(express.json())



serverInstance.use("/pokemon", pokemonRouter )


serverInstance.get("/", (request, response) => {
    console.log("Someone visited the hoimepage of the server")

    response.json({
        message: "Welcome to the server, utsav was here"
    })
})

serverInstance.post("/", (request, response) => {

    console.log(request.body)
    response.json({
        message: "Received data",
        requestData: request.body
    })
})

serverInstance.put("/", (request, response) => {
    response.json ({ message: "Put request eceived"})
})

serverInstance.patch("/", (request, response) => {
    response.json ({ message: "Patch request eceived"})
})

serverInstance.delete("/", (request, response) => {
    response.json ({ message: "Delete request eceived"})
})

//  make the instance for other files to use

module.exports = serverInstance