import { useState } from "react";

export default function Signup() {

  // custom validation for password and confirm password 
  const [passwordsAreNotEqual, setPasswordsAreNotEqual]= useState(false);

  // handleSubmit
  function handleSubmit(e) { 
    e.preventDefault();

    // formData
    const formData = new FormData(e.target);
    const acquisitionChannel = formData.getAll('acquisition');
    const data= Object.fromEntries(formData.entries());
    data.acquisition= acquisitionChannel;
    
    if(data.password !== data['confirm-password']) {
      setPasswordsAreNotEqual(true);
      return;
    }
    
    console.log(data);

    // resetting values wth reset()
    // e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          required  // built-in validation
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            required // built-in validation
            minLength={6} // built-in validation
            maxLength={12} // built-in validation
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required // built-in validation
          />
          <div className="control-error">
            { passwordsAreNotEqual && <p>Passwords must match</p> } 
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input 
            type="text" 
            id="first-name" 
            name="first-name" 
            required // built-in validation
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input 
            type="text" 
            id="last-name" 
            name="last-name"
            required  // built-in validation
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend" // built-in validation
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input 
            type="checkbox" 
            id="terms-and-conditions" 
            name="terms" 
            required // built-in validation
          />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}