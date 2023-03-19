import "./App.css";
import { useState } from "react";

import ExpenseList from "./expenseTracker/components/ExpenseList";
import ExpenseFilter from "./expenseTracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk is good", amount: 400, category: "Groceries" },
    { id: 2, description: "meat is bad", amount: 460, category: "Groceries" },
    {
      id: 3,
      description: "vaccines are weird",
      amount: 500,
      category: "Utilities",
    },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((event) => event.id != id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  if (expenses.length === 0) return null;
  return (
    <div className="App">
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => handleDelete(id)}
      />
    </div>
  );
}

export default App;
