import { useState } from "react"
import React from "react";
export const authent = React.createContext();
export function AuthContextProvider({children}) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }
  function removeFromCart(item) {
    setCart(cart.filter(i => i !== item));
  }
  function clearCart() {
    setCart([]);
  }
  return (
    <authent.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </authent.Provider>
  );
}



export default AuthContextProvider ;

