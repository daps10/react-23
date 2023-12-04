import { createSlice } from "@reduxjs/toolkit";



createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action){
      const newItem= action.payload;
      // check item existing or not
      const existingItem= state.items.find(item => item.id === newItem.id);
      
      // if not exist then add it into items
      if(!existingItem) {
        state.items.push({ 
          id: item.id, 
          price: newItem.price, 
          quantity: 1, 
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice= existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart() {}
  }
})