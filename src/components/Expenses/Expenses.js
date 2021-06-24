import { useState } from 'react';

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');
  const filteredExpenses = props.items.filter(expense => {
    if (filteredYear === "All") {
      return true;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="expenses">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
