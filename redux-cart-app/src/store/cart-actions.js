import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


// create thunk for fetch data
export const fetchCartData = () => {
  return async(dispatch) => {
    const fetchedData= async () => {
      const response= await fetch('https://react-movies-app-6b7ea-default-rtdb.firebaseio.com/cart-reduce.json');

      if(!response.ok){
        throw new Error('Could not fetch cart data!');
      }

      const data= await response.json();
      return data;
    };

    try {
      const cartData= await fetchedData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity 
      }));
    } catch (error) {
      // dispatch success action
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!'
      }));
    }
  };
};

// create thunk for send cart data
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending',
      message: 'Sending cart data..'
    }));

    const sendRequest= async() => {
      // called an API
      const response= await fetch(
        'https://react-movies-app-6b7ea-default-rtdb.firebaseio.com/cart-reduce.json', 
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
          })
        }
      );
  
      // check if response we havent got
      if(!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    }

    try {
      await sendRequest();
      
      // dispatch success action
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    } catch (error) {
      // dispatch success action
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    }
  }
}