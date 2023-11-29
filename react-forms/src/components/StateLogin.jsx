import { useState } from "react";
import Input from "./Input";

export default function Login() {
 
  // managing email and password
  // const [enteredEmail, setEnteredEmail]= useState('');
  // const [enteredPassword, setEnteredPassword]= useState('');

  // combine states in one state
  const [enteredValues, setEnteredValues]= useState({
    email: '',
    password: ''
  });

  // didEdit useState
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  // check email is valid or not
  const emailIsInvalid = 
    didEdit.email && !enteredValues.email.includes('@');

  const passwordIsInvalid = 
    didEdit.password && enteredValues.password.trim().length < 6;

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
    
    if(emailIsInvalid === false) {
      return;
    }

    if(passwordIsInvalid === false) {
      return;
    }

    console.log('User email :: ', enteredValues);
    setEnteredValues({
      email: '',
      password: ''
    })
  }

  // handleInputChange
  function handleInputChange(identifire, value) { 
    setEnteredValues((prevValues) => ({
      ...prevValues, 
      [identifire]: value
    }));
    
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifire]: false
    }))
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value)
  // }

  // handleInputBlur
  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label='Email' 
          id='email'
          type='email'
          name='email'
          onBlur={() => handleInputBlur('email')}  
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={ enteredValues.email }
          error= {
            emailIsInvalid && 'Please enter a valid email!'
          }
        />

        <Input 
          label='Password' 
          id='password'
          type='password'
          name='password'
          onChange={(event) => handleInputChange('password', event.target.value)}
          onBlur={() => handleInputBlur('password')}
          value={ enteredValues.password }
          error= {
            passwordIsInvalid && 'Please enter a valid password!'
          }
        />

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            // it calls whenever input loses focus.
            onBlur={() => handleInputBlur('email')}  
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={ enteredValues.email }
            />
            <div className="control-error">
              { 
                emailIsInvalid && 
                <p>Please enter a valid email address</p> 
              }
            </div>
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
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}