import request from "supertest";
import app from "../src/app";

describe("GET /not-found", () => {
  it("should return 404", (done) => {
    request(app).get("/reset").expect(404, done);
  });
});
