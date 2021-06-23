import { useState } from 'react';

import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    console.log(`Year ${year}`);
  };

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
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
