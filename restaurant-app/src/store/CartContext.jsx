import { createContext, useReducer } from "react";

const CartContext= createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {}
});

// reducer function
function cartReducer(state, action) {
  // add item reducer
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

  // remove item reducer
  if(action.type === "REMOVE_ITEM") {
    const existingItemCartIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );

    const existingCartItem = state.items[existingItemCartIndex];

    // Get all the items from the state
    const updatedItems = [
      ...state.items
    ];

    // check item quantity is 1 or more than that
    if(existingCartItem.quantity === 1) {
      updatedItems.splice(existingItemCartIndex, 1);
    } else {
      // update the item
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1
      };

      // update the item in the existing index
      updatedItems[existingItemCartIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems
    }
  }

  return state;
}

export function CartContextProvider({ children }) {
  
  // useReducer
  const [ cart, dispatchCartAction ] = useReducer(cartReducer, {
    items: []
  });

  // add item
  function addItemDispatchFun(item) {
    dispatchCartAction({
      type: 'ADD_ITEM',
      payload: item
    })
  }
  
  // remove item
  function removeItemDispatchFun(id) {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      payload: id
    });
  }

  // create context object to given inside provider 
  const cartContext = {
    items: cart.items,
    addItem: addItemDispatchFun,
    removeItem: removeItemDispatchFun
  }
  
  return (
    // used cart context provider
    <CartContext.Provider value={ cartContext }>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;