import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
})

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress]= useState('');

  // show cart
  function showCart() {
    setUserProgress('cart')
  }

  // hide cart
  function hideCart() {
    setUserProgress('')
  }

  // show checkout
  function showCheckout() {
    setUserProgress('checkout')
  }
  
  // hide checkout
  function hideCheckout() {
    setUserProgress('cart')
  }

  const userProgressCtx= {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  }

  return (
    <UserProgressContext.Provider value={ userProgressCtx }>
      { children }
    </UserProgressContext.Provider>
  )
}

export default UserProgressContext;