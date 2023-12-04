import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  // dispatch an action
  const dispatch= useDispatch();
  
  // toggle cart handler
  const toggleCartHandler= () => {
    // dispatch the UIactions
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={ toggleCartHandler }>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
