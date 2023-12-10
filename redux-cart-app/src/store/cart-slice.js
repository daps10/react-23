import { createSlice } from "@reduxjs/toolkit";



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

export const cartActions= cartSlice.actions;
export default cartSlice;