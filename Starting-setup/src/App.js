import Expenses from "./components/Expenses";

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
      <Expenses expenses= {expenses}/>
    </div>
  );
}

export default App;
