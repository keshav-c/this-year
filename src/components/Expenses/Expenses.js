import { useState } from 'react';

import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');
  const shownExpenses = props.items.filter(expense => {
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
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <Card className="expenses">
        {shownExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
