import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
  const cartCtx= useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)
  
  // total Cart Items
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity
  }, 0);

  // handle show cart while we clicked on the button
  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={ logoImg } alt='A restaurant'/>
        <h1>JunkFood</h1>
      </div>
      <nav>
        <Button 
          textOnly
          onClick= { handleShowCart }
          >Cart ({ totalCartItems })</Button>
      </nav>
    </header>
  )
}

