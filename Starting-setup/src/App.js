import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 298,
      date: new Date()
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
          title={expenses[0].title} 
          date={expenses[0].date}
          amount={expenses[0].amount}
          />
    </div>
  );
}

export default App;
