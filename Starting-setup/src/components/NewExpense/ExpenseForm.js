import React from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
  const[title, setTitle] = useState('');
  const[amount, setAmount] = useState(0);
  const[date, setDate] = useState('');

  // const [ userInput, setUserInput ] = useState({
  //  title: '',
  //  amount: 0,
  //  date: '' 
  // });


  // onchange handler for title
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value
    // })

    // should use this sytanx whenever your state depends on the previous state.
    // setUserInput((prevState) => {
    //   return { 
    //     ...prevState,
    //     title: event.target.value
    //   }
    // })
  };

  // onchange handler for amount
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // })
  };

  // onchange handler for date
  const dateChangeHandler = (event) => {
    setDate(event.target.date);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // })
  };

  // alternative approach for shared change handler function
  const inputChangeHandler = (identifier, value) => {
    if(identifier === 'title') {
      setTitle(value);
    } else if(identifier === 'date') {
      setDate(value);
    } else {
      setAmount(value);
    }
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(e) => inputChangeHandler('title', e.target.value)} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' onChange={(e) => inputChangeHandler('amount', e.target.value)}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' max='2022-12-31' onChange={(e) => inputChangeHandler('date', e.target.value)}/>
        </div>

        <div  className="new-expense__actions">
          <button type="submit"> Add Expense </button> 
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm;