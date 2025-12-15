import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizza1 from "../assets/pizza-1.jpg";
import pizza2 from "../assets/pizza-2.jpg";
import pizza3 from "../assets/pizza-3.jpg";

const Home = () => {
  const estilosHome = {
    mainContainer: {
      width: "100%",
      margin: 0,
      padding: 0,
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      backgroundColor: "#f8f8f8",
    },

    cardContainerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "50px",
      padding: "40px 20px",
      justifyItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
  };

  const pizzas = [
    {
      image: pizza1,
      name: "Margherita Clásica",
      ingredients: [
        "Tomate",
        "Mozzarella",
        "Albahaca Fresca",
        "Aceite de Oliva",
      ],
      price: 12500,
    },
    {
      image: pizza2,
      name: "Pepperoni Picante",
      ingredients: [
        "Salsa de Tomate",
        "Pepperoni",
        "Mozzarella",
        "Pimienta Roja",
      ],
      price: 15990,
    },
    {
      image: pizza3,
      name: "Vegetariana Gourmet",
      ingredients: [
        "Pimientos",
        "Cebolla Morada",
        "Champiñones",
        "Aceitunas Negras",
      ],
      price: 13500,
    },
  ];

  return (
    <div style={estilosHome.mainContainer}>
      <Header />

      <h2 style={{ textAlign: "center", marginTop: "30px", color: "#333" }}>
        ¡Nuestras Especialidades!
      </h2>

      <div style={estilosHome.cardContainerGrid}>
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            image={pizza.image}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
