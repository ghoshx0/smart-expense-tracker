import express from "express";
import expenseRoutes from "./routes/expense.routes.js";

const app = express();

app.use(express.json());

app.use("/expenses", expenseRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;