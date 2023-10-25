const { app, server } = require("../app");
const request = require("supertest");

describe("API /items", () => {
  it("GET /items", (done) => {
    request(app)
      .get("/items")
      .expect(200)
      .then((response) => {
        const firstData = response.body[0];
        expect(firstData.name).toBe("KYT");
        done();
      })
      .catch((err) => done(err));
  });

  it("GET /items/:id", (done) => {
    request(app)
      .get("/items/2")
      .expect(200)
      .then((response) => {
        const firstData = response.body;
        expect(firstData.name).toBe("ARAI");
        expect(firstData.status).toBe("active");
        done();
      })
      .catch((err) => done(err));
  });

  it("POST /items", (done) => {
    request(app)
      .post("/items")
      .send({
        name: "Suomi",
        status: "active",
      })
      .expect(201)
      .then((response) => {
        const data = response.body;
        expect(data.name).toBe("Suomi");
        expect(data.status).toBe("active");
        done();
      })
      .catch((err) => done(err));
  });

  it("Soft delete", (done) => {
    request(app)
      .delete("/items/3")
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data.message).toBe("Item Deleted Successfully");
        done();
      })
      .catch((err) => done(err));
  });
});

afterAll((done) => {
  server.close();
  done();
});
