// Declare and configure the server

const express = require('express')

const serverInstance = express()


serverInstance.use(express.json())

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

//  make the instance for other files to use

module.exports = serverInstance