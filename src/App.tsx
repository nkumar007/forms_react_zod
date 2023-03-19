import "./App.css";
import { useState } from "react";

import ExpenseList from "./expenseTracker/components/ExpenseList";
import ExpenseFilter from "./expenseTracker/components/ExpenseFilter";
import ExpenseForm from "./expenseTracker/components/ExpenseForm";

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

  return (
    <div className="App">
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      {expenses.length === 0 ? null : (
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => handleDelete(id)}
        />
      )}
    </div>
  );
}

export default App;
