import React, {useState} from "react";
import classes from './UserInput.module.css';

const initialUserInputs = {
  'current-savings' : 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10
}

const UserInput = (props) => {
  const [userInputs, setUserInputs] = useState(initialUserInputs);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
    props.onCalculate(userInputs);
  };

  // reset handler
  const resetHandler = () => {
    setUserInputs(initialUserInputs);
  };

  // input change handler
  const inputChangeHandler = (input, value) => {
    // setuserinputs
    setUserInputs((prevInput) => {
      return {
        ...prevInput,
        [input]: +value // dynamically way update values
      }
    })
  };
 
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor={classes['current-savings']}>Current Savings ($)</label>
          <input 
            onChange={(e) => inputChangeHandler('current-savings', e.target.value)} 
            type="number" 
            id="current-savings"
            value={userInputs['current-savings']} 
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input 
            onChange={(e) => inputChangeHandler('yearly-contribution', e.target.value)} 
            type="number" 
            value={userInputs['yearly-contribution']} 
            id="yearly-contribution" 
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input 
            onChange={(e) => inputChangeHandler('expected-return',e.target.value)} 
            type="number" 
            value={userInputs['expected-return']} 
            id="expected-return" 
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input 
            onChange={(e) => inputChangeHandler('duration', e.target.value)} 
            type="number" 
            value={userInputs['duration']} 
            id="duration" 
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;