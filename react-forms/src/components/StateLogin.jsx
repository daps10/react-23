import Input from "./Input";
import { 
  isEmail,
  isNotEmpty,
  hasMinLength 
} from '../util/validation'
import { useInput } from "../hooks/useInput";
 
export default function Login() {
 
  // managing email and password
  // const [enteredEmail, setEnteredEmail]= useState('');
  // const [enteredPassword, setEnteredPassword]= useState('');

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));  

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6));

  // check email is valid or not
  // const emailIsInvalid = 
  //   didEdit.email && 
  //   !isEmail(enteredValues.email) && 
  //   !isNotEmpty(enteredValues.email);

  // const passwordIsInvalid = 
  //   didEdit.password && 
  //   !hasMinLength(enteredValues.password, 6);

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
    
    if(emailHasError || passwordHasError) {
      return;
    }

    console.log('User email :: ', emailValue, passwordValue);
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
          onBlur={handleEmailBlur}  
          onChange={handleEmailChange}
          value={ emailValue }
          error= {
            emailHasError && 'Please enter a valid email!'
          }
        />

        <Input 
          label='Password' 
          id='password'
          type='password'
          name='password'
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={ passwordValue }
          error= {
            passwordHasError && 'Please enter a valid password!'
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