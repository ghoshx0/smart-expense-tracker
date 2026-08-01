import request from "supertest";
import fs from "fs/promises";
import path from "path";
import app from "../src/app.js";

const expensesFilePath = path.resolve(
  "src",
  "data",
  "expenses.json"
);

beforeEach(async () => {
  await fs.writeFile(
    expensesFilePath,
    JSON.stringify([], null, 2)
  );
});

//TEST 1 CREATE EXPENSE

test("should create a new expense", async () => {
  const response = await request(app)
    .post("/expenses")
    .send({
      title: "Lunch",
      amount: 250,
      category: "Food",
      date: "2026-08-01",
    });

  expect(response.statusCode).toBe(201);

  expect(response.body.success).toBe(true);

  expect(response.body.data.title).toBe("Lunch");

  expect(response.body.data.amount).toBe(250);

  expect(response.body.data.category).toBe("Food");

  expect(response.body.data.id).toBeDefined();
});

//TEST 2 GET ALL EXPENSE

test("should return all expenses", async () => {
  await request(app)
    .post("/expenses")
    .send({
      title: "Lunch",
      amount: 250,
      category: "Food",
      date: "2026-08-01",
    });

  const response = await request(app).get("/expenses");

  expect(response.statusCode).toBe(200);

  expect(response.body.success).toBe(true);

  expect(response.body.data).toHaveLength(1);
});

//TEST 3 FILTER BY CATEGORY

test("should filter expenses by category", async () => {
  await request(app)
    .post("/expenses")
    .send({
      title: "Lunch",
      amount: 250,
      category: "Food",
      date: "2026-08-01",
    });

  await request(app)
    .post("/expenses")
    .send({
      title: "Movie",
      amount: 400,
      category: "Entertainment",
      date: "2026-08-01",
    });

  const response = await request(app)
    .get("/expenses?category=Food");

  expect(response.statusCode).toBe(200);

  expect(response.body.data).toHaveLength(1);

  expect(response.body.data[0].category).toBe("Food");
});

//TEST 4 CALCULATE OVERALL TOTAL

test("should calculate total expenses", async () => {
  await request(app)
    .post("/expenses")
    .send({
      title: "Lunch",
      amount: 250,
      category: "Food",
      date: "2026-08-01",
    });

  await request(app)
    .post("/expenses")
    .send({
      title: "Movie",
      amount: 400,
      category: "Entertainment",
      date: "2026-08-01",
    });

  const response = await request(app)
    .get("/expenses/total");

  expect(response.statusCode).toBe(200);

  expect(response.body.data.total).toBe(650);
});

//TEST 5 DELETE EXPENSE

test("should delete an expense", async () => {
  const createResponse = await request(app)
    .post("/expenses")
    .send({
      title: "Lunch",
      amount: 250,
      category: "Food",
      date: "2026-08-01",
    });

  const id = createResponse.body.data.id;

  const deleteResponse = await request(app)
    .delete(`/expenses/${id}`);

  expect(deleteResponse.statusCode).toBe(200);

  const getResponse = await request(app)
    .get("/expenses");

  expect(getResponse.body.data).toHaveLength(0);
});

//TEST 6 DELETE INVALID EXPENSE

test("should return 404 when deleting a non-existent expense", async () => {
  const response = await request(app)
    .delete("/expenses/random-id");

  expect(response.statusCode).toBe(404);

  expect(response.body.success).toBe(false);
});

//TEST 7 VALIDATION

test("should return 400 for invalid expense data", async () => {
  const response = await request(app)
    .post("/expenses")
    .send({
      title: "",
      amount: -100,
      category: "",
      date: "abc",
    });

  expect(response.statusCode).toBe(400);

  expect(response.body.success).toBe(false);

  expect(response.body.errors.length).toBeGreaterThan(0);
});