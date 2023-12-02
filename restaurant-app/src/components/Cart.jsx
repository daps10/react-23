import { useContext } from 'react';
import CartContext from '../store/CartContext';
import Modal from './UI/Modal';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';

export default function Cart() {
  // get context values
  const cartCtx= useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  // get total of the items
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + ( item.quantity * item.price ),
    0 
  );

  // hide cart 
  function hideCloseCart() {
    userProgressCtx.hideCart();
  }
  
  return (
    <Modal className='cart' open={ userProgressCtx.progress === 'cart' }>
      <h2>Your Cart</h2>
      <ul>
        {
          cartCtx.items.map((item) => (
            <li key={ item.id }>
              { item.name } - { item.quantity }
            </li>
          ))
        }
      </ul>
      <p className='cart-total'>{ currencyFormatter.format(cartTotal) }</p>
      
      <p className='modal-actions'>
        <Button 
          textOnly
          onClick={ hideCloseCart }
        > Close </Button>
        <Button onClick={ hideCloseCart }> Go to Checkout </Button>
      </p>
    </Modal>
  )
}