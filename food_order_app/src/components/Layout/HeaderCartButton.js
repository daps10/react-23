import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  
  // useContext to fetch the cartContext
  const cartCtx= useContext(CartContext);
  const { items } = cartCtx;

  // get number of items from the cartContext
  const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
    return curNumber + item.amount
  }, 0);

  // btn classes check the btn highlighted or not.
  const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if(cartCtx.items.length === 0) {
      return;
    }
    // set the btnHighlighted true
    setBtnIsHighlighted(true);

    // after sometimer btnHighlighted should be false
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    // clear timeout
    return () => {
      clearTimeout(timer);
    }
  }, [ items ]);

  return (
    <button className={ btnClasses } onClick={props.onClick}>
      <span className={ classes.icon }>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={ classes.badge }>
        { numberOfCartItems }
      </span>
    </button>
  )
}

export default HeaderCartButton;