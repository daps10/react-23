import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';

let isInitial= true;

function App() {
  const showCart= useSelector(state => state.ui.cartIsVisible);
  const cart= useSelector((state) => state.cart);
  const dispatch= useDispatch();
  const notification= useSelector((state) => state.ui.notification);

  // useEffect
  useEffect(() => {
    if(isInitial) {
      isInitial= false;
      return;
    }

    // called the thunk for asynchronous function
    dispatch(sendCartData(cart));

  }, [cart, dispatch]);
  
  return (
    <Fragment>
      { notification && (
        <Notification 
          status={ notification.status }
          title= { notification.title }
          message= { notification.message }
        />
      )}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
