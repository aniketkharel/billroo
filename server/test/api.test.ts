import { describe, it, expect } from "@jest/globals";

import request from "supertest";
import app from "../src/app";

const user_id = 91235;

// no routes defined for /
describe("GET /api", () => {
  it("should return 400 NOT FOUND", () => {
    return request(app).get("/api").expect(404);
  });
});

// expenses for the day
describe("GET /api/expenses/today/all/3", () => {
  it("should return 200 OK", (done: any) => {
    request(app).get("/api/expenses/today/all/2").expect(200, done);
  });
});

// add todays expense for a particular category
describe("POST /expenses/today", () => {
  it("should return true if data is inserted", (done) => {
    request(app)
      .post("/api/expenses/today")
      .field("user_id", user_id)
      .field("cat_id", 1)
      .field("amount", 10)
      .end(function (err, res) {
        expect(res.body.msg).toBe("No Data");
        done();
      })
      .expect(200);
  });
});

// update todays expense
describe("PUT /expenses/today", () => {
  it("should return 404 Bad Request", (done) => {
    request(app)
      .put("/api/expenses/today")
      .field("user_id", user_id)
      .field("exp_id", 41)
      .field("amount", 10)
      .end(function (_err, res) {
        expect(res.body.status).toBe(400);
        done();
      })
      .expect(200);
  });
});
