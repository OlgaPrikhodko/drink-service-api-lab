import request from "supertest";
import { app } from "../app";

describe("Test tea API endpoint request", () => {
  test("GET /tea without param should return correct default object with default tea name", async () => {
    const res = await request(app).get("/tea");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Green",
    });
  });

  test("GET /tea with param should return correct object", async () => {
    const res = await request(app).get("/tea").query({ teaName: "Herbal" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Tea", name: "Herbal" });
  });
});
