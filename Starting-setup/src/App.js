import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

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
      <NewExpense/>
      <Expenses expenses= {expenses}/>
    </div>
  );
}

export default App;
