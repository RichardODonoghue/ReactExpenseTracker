import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };

  const toggleFormVisibilityTrue = () => {
    setFormVisibility(true);
  };

  const toggleFormVisibilityFalse = () => {
    setFormVisibility(false);
  };

  return (
    <div className="new-expense">
      {!formVisibility && (
        <button onClick={toggleFormVisibilityTrue}>Add New Expense</button>
      )}
      {formVisibility && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleFormVisibilityFalse}
        />
      )}
    </div>
  );
};

export default NewExpense;
