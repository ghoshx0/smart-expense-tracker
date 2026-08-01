import expenseService from "../services/expense.service.js";

class ExpenseController {
  async createExpense(req, res, next) {
    try {
      const expense = await expenseService.createExpense(req.body);

      return res.status(201).json({
        success: true,
        data: expense,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllExpenses(req, res, next) {
    try {
      const { category } = req.query;

      const expenses = await expenseService.getAllExpenses(category);

      return res.status(200).json({
        success: true,
        data: expenses,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTotalExpenses(req, res, next) {
    try {
      const { category } = req.query;

      const total = await expenseService.getTotalExpenses(category);

      return res.status(200).json({
        success: true,
        data: total,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteExpense(req, res, next) {
    try {
      const { id } = req.params;

      const expenseDeleted = await expenseService.deleteExpense(id);

      if (!expenseDeleted) {
        return res.status(404).json({
          success: false,
          message: "Expense not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Expense deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ExpenseController();