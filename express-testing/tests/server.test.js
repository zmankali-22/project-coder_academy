const request = require("supertest");
const { app } = require("../src/server");

describe("Home Page route shows an error", () => {
  //  localhost:3000/v2/
  it("Server returns an object with a message and error property", async () => {
    const response = await request(app).get("/v2/");
    console.log(response.body);
    expect(response.body.message).toBeTruthy();
  });
});

describe("v2/functionality", () => {
  it("v2/POST receives data correctly", async () => {
    const response = await request(app).post("/v2/").send({
      movie: "Dune",
    });

    /*
            Expected response body:
            {
            message : "Received data",
            data: {
                     movie: "Dune"
                    }
            }
        */


            expect(response.body.data.movie). toBe("Dune")
  });
});
