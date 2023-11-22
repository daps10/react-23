import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

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
    <Fragment>
      { cartIsShown && <Cart onClose={ hideCartHandler }/>}
      
      <Header onShowCart={ showCartHandler }/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
