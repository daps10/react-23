import React from 'react';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
