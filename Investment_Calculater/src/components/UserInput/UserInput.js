import React from "react";

const UserInput = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
  };

  const resetHandler = () => {
    console.log('RESET');
  };

  const inputChangeHandler = (input, value) => {
    console.log(input);
    console.log(value);
  };
 
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(e) => inputChangeHandler('current-savings', e.target.value)} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={(e) => inputChangeHandler('yearly-contribution', e.target.value)} type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(e) => inputChangeHandler('expected-return',e.target.value)} type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(e) => inputChangeHandler('duration', e.target.value)} type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;