# Smart Expense Tracker API

A RESTful API for managing personal expenses built with **Node.js** and **Express.js**.

The API allows users to:

- Add a new expense
- View all expenses
- Filter expenses by category
- Search expenses by title (Bonus)
- Calculate total expenses
- Delete an expense

Data is stored in a local JSON file (`src/data/expenses.json`), so no database setup is required.

---

## Tech Stack

- Node.js
- Express.js
- express-validator
- UUID
- Jest
- Supertest

---

## Project Structure

```
smart-expense-tracker/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── expense.test.js
│
├── package.json
├── jest.config.js
├── README.md
└── AI_NOTES.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd smart-expense-tracker
```

Install dependencies:

```bash
npm install
```

---

## Start the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server runs on:

```
http://localhost:3000
```

---

## Run Tests

```bash
npm test
```

---

## API Endpoints

### Add Expense

```
POST /expenses
```

Request Body

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-08-01"
}
```

---

### Get All Expenses

```
GET /expenses
```

---

### Filter Expenses by Category

```
GET /expenses?category=Food
```

---

### Get Total Expenses

```
GET /expenses/total
```

---

### Get Total Expenses by Category

```
GET /expenses/total?category=Food
```

---

### Delete Expense

```
DELETE /expenses/:id
```

---

### Search Expenses (Bonus)

```
GET /expenses/search?query=lunch
```

Returns all expenses whose title contains the search text (case-insensitive).

Example:

```json
[
  {
    "id": "...",
    "title": "Lunch at Office",
    "amount": 180,
    "category": "Food",
    "date": "2026-08-02"
  }
]
```

## Validation Rules

The following validations are applied when creating an expense:

- Title is required.
- Amount must be greater than 0.
- Category is required.
- Date must be a valid ISO 8601 date.

---

## Testing

The project includes automated tests using:

- Jest
- Supertest

The test suite covers:

- Creating an expense
- Viewing expenses
- Filtering by category
- Calculating total expenses
- Deleting an expense
- Validation errors
- Invalid delete requests

---

## Data Storage

Expenses are stored in:

```
src/data/expenses.json
```

No external database is required.