const request = require("supertest");
const server = require("../app");

require("dotenv").config();

describe("GET /api/get/users", () => {
  it("should return all users", async () => {
    const res = await request(server).get("/api/get/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("should search users", async () => {
    const res = await request(server).get(
      "/api/search/user?email=batman@gmail.com"
    );
    expect(res.statusCode).toBe(200);

    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("should create a user", async () => {
    const res = await request(server).post("/api/create/user").send({
      userName: "superman",
      email: "super@gmail.com",
      contact: 12345678,
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.data.userName).toBe("superman");
  });

  it("should update a user", async () => {
    const res = await request(server)
      .patch(`/api/update/user?email=super@gmail.com`)
      .send({
        userName: "superman2",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.userName).toBe("superman2");
  });

  it("should delete a user", async () => {
    const res = await request(server).delete(
      `/api/delete/user?email=super@gmail.com`
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBe("User deleted");
  });
});
