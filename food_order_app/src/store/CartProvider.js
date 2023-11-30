import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState= {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    // const updatedItems = state.items.concat(action.payload);
    const updatedTotalAmount = state.totalAmount + (action.payload.price *  action.payload.amount);
    
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    // check item existed or not
    const existingCartItem = state.items[existingCartItemIndex];
    
    let updatedItems;
    if(existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  } 
  if(action.type === 'REMOVE') {
    // fetch existing item from id
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.payload
    );

    // fetch existing item from existingitemindex
    const existingItem = state.items[existingCartItemIndex];

    // udpated the total amount
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    
    // update the items
    let updatedItems;
    if(existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.payload);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems= [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; 
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  if(action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
 
  // insert Item from the Cart
  const addItemToCartHandler = ( item ) => {
    
    dispatchCartAction({
      type: "ADD",
      payload: item
    });
  };
  
  // remove Item from the Cart
  const removeItemToCartHandler = ( id ) => {
    dispatchCartAction({
      type: "REMOVE",
      payload: id
    });
  };

  const clearCartHandler= () => {
    dispatchCartAction({
      type: 'CLEAR'
    })
  }

  // cart context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler
  }

  return (
    <CartContext.Provider value={ cartContext }>
      { props.children }
    </CartContext.Provider>
  )
}

export default CartProvider;