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

  const addExpenseHandler = expense => {
    console.log('in app.js');
    console.log(expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses= {expenses}/>
    </div>
  );
}

export default App;
