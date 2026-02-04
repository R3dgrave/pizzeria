import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const token = true;

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existe = prevCart.find((p) => p.id === pizza.id);
      if (existe) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p,
        );
      }
      return [...prevCart, { ...pizza, count: 1 }];
    });
  };

  //acc = acumulador, p = pizza valor actual
  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  const aumentarCantidad = (id) => {
    const nuevosItems = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza,
    );
    setCart(nuevosItems);
  };

  const disminuirCantidad = (id) => {
    const nuevosItems = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: Math.max(0, pizza.count - 1) }
          : pizza,
      )
      .filter((pizza) => pizza.count > 0);

    setCart(nuevosItems);
  };

  const value = {
    total,
    token,
    cart,
    addToCart,
    aumentarCantidad,
    disminuirCantidad,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
