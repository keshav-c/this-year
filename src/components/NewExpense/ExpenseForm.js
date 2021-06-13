import React, { useState } from 'react';

import "./ExpenseForm.css";

const ExpenseForm = () => {
// useState input is empty string because input from form fields is always a string
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

// use a state buffer object instead of multiple individual state variables.
  const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
  })

//   const changeTitleHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   };
  const changeTitleHandler = (event) => {
      setUserInput({
          ...userInput,
          enteredTitle: event.target.value
      })
  };
//   const changeAmountHandler = (event) => {
//     setEnteredAmount(event.target.value);
//   };
  const changeAmountHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
//   const changeDateHandler = (event) => {
//     setEnteredDate(event.target.value);
//   };
  const changeDateHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-12-31"
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
