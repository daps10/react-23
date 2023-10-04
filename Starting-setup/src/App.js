import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    title: 'Car Insurance',
    amount: 298,
    date: new Date()
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // used spread to update state.
    // setExpenses([expense, ...expenses])

    // used prevexpenses which would return recent array
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
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
