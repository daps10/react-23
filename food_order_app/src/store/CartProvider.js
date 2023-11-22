import CartContext from "./cart-context";

const CartProvider = props => {
  // insert Item from the Cart
  const addItemToCartHandler = item => {};
  
  // remove Item from the Cart
  const removeItemToCartHandler = item => {};

  // cart context
  const cartContext = {
    items: [],
    totalAmount: 0,
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