// CartContext.js
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/cart')
      .then(res => res.json())
      .then(data => setCartCount(data.items.reduce((sum, item) => sum + item.quantity, 0)));
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
