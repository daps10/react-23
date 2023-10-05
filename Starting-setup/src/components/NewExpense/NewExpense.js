import React,{ useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  // handler to handle child function data
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    // console.log(expenseData);
    setIsEditing(false);
  }
  
  // onbutton click 
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // stopEditingfunction 
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      { !isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
      { isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData= {saveExpenseDataHandler}/>}
    </div>
  );
}

export default NewExpense;