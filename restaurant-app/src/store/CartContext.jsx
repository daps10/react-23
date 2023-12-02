import { createContext, useReducer } from "react";

const CartContext= createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {}
});

// reducer function
function cartReducer(state, action) {
  if(action.type === "ADD_ITEM") {
    // state.items.push(action.payload);
    const existingItemCartIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    // created new copy for items
    const updatedItems = [...state.items];

    // findIndex always returns -1 if not exist in the array
    if(existingItemCartIndex > -1) {
      const existingItem= state.items[existingItemCartIndex]; 
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      }

      // override the existing item
      updatedItems[existingItemCartIndex] = updatedItem;
    } else {
      updatedItems.push({
        ...action.item, 
        quantity: 1
      });
    }

    // return states
    return {
      ...state,
      items: updatedItems
    };
  } 

  if(action.type === "REMOVE_ITEM") {
    // -- update the state to remove a meal item
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [] = useReducer(cartReducer, {
    items: []
  });
  
  return (
    // used cart context provider
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;