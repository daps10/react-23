import React from "react";
import classes from './Button.module.css';

const Button = props => {
  return <Button 
    className={classes.button} 
    type={props.type || 'button'}
    onClick={props.onClick}
    >
      {props.children}
  </Button>
};

export default Button;