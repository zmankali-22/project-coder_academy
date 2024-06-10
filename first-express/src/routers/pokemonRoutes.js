const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.json({ message: "Router route activated" });
});

router.get("/random", (request, response) => {
  let queryParams = request.query;
  response.json({
    message: "Random route activated",
    queryParams: queryParams,
  });
});

router.get("/:pokemonNumber", (request, response) => {
  let retrivedNumberFromUrl = request.params.pokemonNumber;

  response.json({
    number: retrivedNumberFromUrl,
  });
});

router.post("/", (request, response) => {
  response.json({ message: "Nah nah no posting here" });
});

module.exports = router;
