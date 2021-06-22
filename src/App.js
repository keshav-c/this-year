import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
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
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
