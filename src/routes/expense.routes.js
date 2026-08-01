import { Router } from "express";
import expenseController from "../controllers/expense.controller.js";
import { createExpenseValidator } from "../validators/expense.validator.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post(
  "/",
  createExpenseValidator,
  validate,
  expenseController.createExpense
);

router.get(
  "/",
  expenseController.getAllExpenses
);

router.get(
  "/total",
  expenseController.getTotalExpenses
);

router.delete(
  "/:id",
  expenseController.deleteExpense
);

export default router;