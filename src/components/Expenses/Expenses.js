import { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");
  const [showChart, setShowChart] = useState(false);
  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "All") {
      return true;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  const filterChangeHandler = (year) => {
    if (year !== "All") {
      setShowChart(true);
    } else {
      setShowChart(false);
    }
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {showChart && <ExpensesChart filteredExpenses={filteredExpenses} />}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
