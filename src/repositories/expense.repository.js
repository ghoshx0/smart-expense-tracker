import { EXPENSES_FILE_PATH } from "../config/storage.js";
import { readJsonFile, writeJsonFile } from "../utils/file.util.js";

class ExpenseRepository {
  async getAllExpenses() {
    return await readJsonFile(EXPENSES_FILE_PATH);
  }

  async saveAllExpenses(expenses) {
    await writeJsonFile(EXPENSES_FILE_PATH, expenses);
  }

  async addExpense(expense) {
    const expenses = await this.getAllExpenses();

    expenses.push(expense);

    await this.saveAllExpenses(expenses);

    return expense;
  }

  async deleteExpenseById(id) {
    const expenses = await this.getAllExpenses();

    const filteredExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    const expenseDeleted =
      filteredExpenses.length !== expenses.length;

    if (expenseDeleted) {
      await this.saveAllExpenses(filteredExpenses);
    }

    return expenseDeleted;
  }
}

export default new ExpenseRepository();