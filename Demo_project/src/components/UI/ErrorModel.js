import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModel.module.css';
import ReactDOM from 'react-dom';

// backdrop model
const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm}/>;
};

// model overlay
const ModalOverlay = props => {
  return (
    <Card classes={classes.modal}>
      <header className={classes.header}>
        <h2>
          {props.title}
        </h2>
      </header>
      <div className={classes.content}>
        <p>
          {props.message}
        </p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>      
      </footer>
    </Card>
  );
}

const ErrorModel = props => {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm}/>, 
          document.getElementById('backdrop-root')
        )
      }
      {
        ReactDOM.createPortal(
          <ModalOverlay 
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
          />,
          document.getElementById('overlay-root')
        )
      }
    </React.Fragment>
  )
};

export default ErrorModel;