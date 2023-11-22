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

  // cart context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return (
    <CartContext.Provider value={ cartContext }>
      { props.children }
    </CartContext.Provider>
  )
}

export default CartProvider;