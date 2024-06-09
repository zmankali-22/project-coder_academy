//  run the server

const serverInstance = require("./app")

serverInstance.listen(3000, () => {
    console.log("Server is running on port 3000")
})