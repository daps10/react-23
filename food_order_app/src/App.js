import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  // to manage cart is visible or not 
  const [cartIsShown, setCartIsShown] = useState(false);

  // cart show
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  // cart hide
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={ hideCartHandler }/>}
      
      <Header onShowCart={ showCartHandler }/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
