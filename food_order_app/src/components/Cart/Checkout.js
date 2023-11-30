import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  // state for formInputValidity
  const [formInputsValidity, setFormInputsValidity]= useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    
    // get values from the ref()
    const enteredName= nameInputRef.current.value;
    const enteredStreet= streetInputRef.current.value;
    const enteredPostalCode= postalCodeInputRef.current.value;
    const enteredCity= cityInputRef.current.value;

    // check values are valid or not
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode);

    // set state for input validity
    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid
    })

    // make form valid from all the validations
    const formIsValid = 
      enteredNameIsValid && 
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    // check form is valid or not
    if(!formIsValid) {
      // set an error 
      return;
    } 

    // submit cart data
    // console.log('name :: ', enteredName);
    // console.log('street :: ', enteredStreet);
    // console.log('postalcode :: ', enteredPostalCode);
    // console.log('city :: ', enteredCity);

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode
    })

  };

  // control classes
  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className= { nameControlClasses }>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          ref={ nameInputRef }
          />
          { !formInputsValidity.name && <p>Please enter a valid name!</p> }
      </div>
      <div className= { streetControlClasses }>
        <label htmlFor='street'>Street</label>
        <input 
          type='text' 
          id='street' 
          ref={ streetInputRef }
          />
          { !formInputsValidity.street && <p>Please enter a valid street!</p> }

      </div>
      <div className= { postalCodeControlClasses }>
        <label htmlFor='postal'>Postal Code</label>
        <input 
          type='text' 
          id='postal' 
          ref={ postalCodeInputRef }
          />
        { !formInputsValidity.postalCode && <p>Please enter a valid postal code ( 5 characters long )!</p> }
      </div>
      <div className= { cityControlClasses }>
        <label htmlFor='city'>City</label>
        <input 
          type='text' 
          id='city' 
          ref={cityInputRef}
          />
        { !formInputsValidity.city && <p>Please enter a valid city!</p> }
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;