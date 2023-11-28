import { useState } from "react";

export default function Login() {
 
  // managing email and password
  // const [enteredEmail, setEnteredEmail]= useState('');
  // const [enteredPassword, setEnteredPassword]= useState('');

  // combine states in one state
  const [enteredValues, setEnteredValues]= useState({
    email: '',
    password: ''
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log('User email :: ', enteredValues);
  }

  function handleInputChange(identifire, value) { 
    setEnteredValues((prevValues) => ({
      ...prevValues, 
      [identifire]: value
    }))
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={ enteredValues.email }
            />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={ enteredValues.password }
            />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}