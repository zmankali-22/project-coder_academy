// Declare and configure the server

const express = require("express");
const serverInstance = express();
const { body, validationResult } = require("express-validator");

//  raw json body allowed
serverInstance.use(express.json());
// Form data in body allowed
serverInstance.use(express.urlencoded({ extended: true }));

//  Every route that begins with /pokemon gets passed to PokemonRouter
const pokemonRouter = require("./routers/pokemonRoutes.js");
serverInstance.use("/pokemon", pokemonRouter);

serverInstance.get("/", (request, response) => {
  console.log("Someone visited the hoimepage of the server");

  response.json({
    message: "Welcome to the server, utsav was here",
  });
});

serverInstance.post(
  "/",
  body("username").notEmpty().isLength({ min: 4, max: 10 }),
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.status(400).json({
        message: "Bad username",
        errors: errors.array(),
      });
    }

    console.log(request.body);

    response.json({
      message: "Received data",
      requestData: request.body,
    });
  }
);

serverInstance.put("/", (request, response) => {
  response.json({ message: "Put request eceived" });
});

serverInstance.patch("/", (request, response) => {
  response.json({ message: "Patch request eceived" });
});

serverInstance.delete("/", (request, response) => {
  response.json({ message: "Delete request eceived" });
});

//  make the instance for other files to use

module.exports = serverInstance;
