import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  // dispatch an action
  const dispatch= useDispatch();
  const totalQuantity= useSelector(state => state.cart.totalQuantity);
  // toggle cart handler
  const toggleCartHandler= () => {
    // dispatch the UIactions
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={ toggleCartHandler }>
      <span>My Cart</span>
      <span className={classes.badge}>{ totalQuantity }</span>
    </button>
  );
};

export default CartButton;
