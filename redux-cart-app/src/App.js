import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial= true;

function App() {
  const showCart= useSelector(state => state.ui.cartIsVisible);
  const cart= useSelector((state) => state.cart);
  const dispatch= useDispatch();
  const notification= useSelector((state) => state.ui.notification);

  // useEffect
  useEffect(() => {
    // called an function for await
    const sendCart= async() => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data..'
      }));

      // called an API
      const response= await fetch(
        'https://react-movies-app-6b7ea-default-rtdb.firebaseio.com/cart-reduce.json', 
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      );

      // check if response we havent got
      if(!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      // dispatch success action
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));

      // set reponse in the responsedata
      // const responseData= await response.json();
    }

    if(isInitial) {
      isInitial= false;
      return;
    }

    // sendcart catch if we found any error
    sendCart().catch((error) => {
      // dispatch success action
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    });

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
