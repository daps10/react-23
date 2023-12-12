import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice= createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action){
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action){
      const newItem= action.payload;
      // check item existing or not
      const existingItem= state.items.find(item => item.id === newItem.id);
      
      // update totalQuantity
      state.totalQuantity++;

      // if not exist then add it into items
      if(!existingItem) {
        state.items.push({ 
          id: newItem.id, 
          price: newItem.price, 
          quantity: 1, 
          description: newItem.description,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice= existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id= action.payload;
      // fetched existing item from items
      const existingItem = state.items.find(item => item.id === id);

      // decrease the total quantity
      state.totalQuantity--;

      if(existingItem.quantity === 1) {
        state.items= state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice= existingItem.totalPrice - existingItem.price;
      }
    }
  }
})

// create thunk
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
          body: JSON.stringify(cart)
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

export const cartActions= cartSlice.actions;
export default cartSlice;