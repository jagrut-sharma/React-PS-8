import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: (id) => {},
  removeFromCart: (id) => {}
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    console.log(item);
    const newCart = cart.filter((product) => product.name !== item.name);
    setCart(newCart);
  };

  const cartContext = {
    cart,
    addToCart,
    removeFromCart
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
