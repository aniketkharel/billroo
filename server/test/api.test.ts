import request from "supertest";
import app from "../src/app";

// no routes defined for /
describe("GET /api", () => {
  it("should return 400 NOT FOUND", () => {
    return request(app).get("/api").expect(404);
  });
});

// expense for the day
describe("GET /api/expenses/today/3", () => {
  it("should return 200 OK", (done: any) => {
    request(app).get("/api/expenses/today/3").expect(200, done);
  });
});

// averages calculation for the user
describe("GET /api/expenses/3", () => {
  it("should return 200 OK", (done: any) => {
    request(app).get("/api/expenses/3").expect(200, done);
  });
});

// describe("POST /contact", () => {
//   it("should return false from assert when no message is found", (done) => {
//     request(app)
//       .post("/contact")
//       .field("name", "John Doe")
//       .field("email", "john@me.com")
//       .end(function (err, res) {
//         expect(res.error).to.be.false;
//         done();
//       })
//       .expect(302);
//   });
// });
