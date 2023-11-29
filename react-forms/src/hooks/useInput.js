import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  // combine states in one state
  const [enteredValue, setEnteredValue]= useState(defaultValue);

  const valueIsValid= validationFn(enteredValue);

  // didEdit useState
  const [didEdit, setDidEdit] = useState(false);

  // handleInputChange
  function handleInputChange(event) { 
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value)
  // }

  // handleInputBlur
  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid
  }
}