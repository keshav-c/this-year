import "./NewExpense.css";

import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const displayFormHandler = () => {
    setShowForm((showForm) => !showForm);
  };

  const showFormButton = (
    <button type="button" onClick={displayFormHandler}>
      Add New Expense
    </button>
  );

  let newExpenseContent = showFormButton;
  if (showForm) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseHandler}
        onCancel={displayFormHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
