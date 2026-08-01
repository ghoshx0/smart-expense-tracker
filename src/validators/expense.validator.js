import { body } from "express-validator";

export const createExpenseValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required."),

  body("amount")
    .isFloat({ gt: 0 })
    .withMessage("Amount must be greater than 0."),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required."),

  body("date")
    .isISO8601()
    .withMessage("Date must be a valid ISO 8601 date.")
];