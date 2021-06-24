import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }
  const expensesContent = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  
  return (
    <ul className="expenses-list">
      {expensesContent}
    </ul>
  );
};

export default ExpensesList;
