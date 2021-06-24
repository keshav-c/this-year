import { useState } from 'react';

import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
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

  let expensesContent = <p>{`No Expenses Found for ${filteredYear}.`}</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
    ));
  }

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <Card className="expenses">
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
