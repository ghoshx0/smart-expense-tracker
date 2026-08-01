import { v4 as uuidv4 } from "uuid";
import expenseRepository from "../repositories/expense.repository.js";

class ExpenseService {
  async createExpense(expenseData) {
    const expense = {
      id: uuidv4(),
      ...expenseData,
    };

    return await expenseRepository.addExpense(expense);
  }

  async getAllExpenses(category) {
    const expenses = await expenseRepository.getAllExpenses();

    if (!category) {
      return expenses;
    }

    return expenses.filter(
      (expense) => expense.category === category
    );
  }

  async getTotalExpenses(category) {
    const expenses = await this.getAllExpenses(category);

    const total = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    return {
      total,
    };
  }

  async deleteExpense(id) {
    const expenseDeleted =
      await expenseRepository.deleteExpenseById(id);

    return expenseDeleted;
  }

	async searchExpenses(query) {
		const expenses = await expenseRepository.getAllExpenses();

		return expenses.filter((expense) =>
			expense.title.toLowerCase().includes(query.toLowerCase())
		);
	}
}

export default new ExpenseService();