import { createContext, useContext, useState } from "react";
import { useUser } from "./UserContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useUser();

  const cartFetch = async () => {
    const token = localStorage.getItem("token");

    if (!token || !user) {
      alert("Debes iniciar sesión para enviar el pedido");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: cart }),
      });

      if (response.ok) {
        alert("carrito enviado");
        setCart([]);
      } else {
        alert("Error al enviar el pedido");
      }
    } catch (error) {
      console.error(error);
      alert("error al enviar el carrito", error);
    }
  };

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
    cart,
    addToCart,
    aumentarCantidad,
    disminuirCantidad,
    cartFetch,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
