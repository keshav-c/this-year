import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2021, 6, 13),
      title: "Health Insurance",
      amount: 500,
    },
    {
      id: "e2",
      date: new Date(2021, 5, 7),
      title: "ACM Membership",
      amount: 100.01,
    },
    {
      id: "e3",
      date: new Date(2021, 9, 21),
      title: "RTX 3080",
      amount: 699.99,
    },
    {
      id: "e4",
      date: new Date(2021, 12, 20),
      title: "Vacation",
      amount: 875,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={ expenses[0].title }
        amount={ expenses[0].amount }
        date={ expenses[0].date }
      ></ExpenseItem>
      <ExpenseItem
        title={ expenses[1].title }
        amount={ expenses[1].amount }
        date={ expenses[1].date }
      ></ExpenseItem>
      <ExpenseItem
        title={ expenses[2].title }
        amount={ expenses[2].amount }
        date={ expenses[2].date }
      ></ExpenseItem>
      <ExpenseItem
        title={ expenses[3].title }
        amount={ expenses[3].amount }
        date={ expenses[3].date }
      ></ExpenseItem>
    </div>
  );
}

export default App;
