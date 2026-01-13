import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas"

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

  const data_pizzas = pizzas.map((pizza, index) => (
    <CardPizza
      key={index}
      image={pizza.img}
      name={pizza.name}
      ingredients={pizza.ingredients}
      price={pizza.price}
    />
  ))

  return (
    <div style={estilosHome.mainContainer}>
      <Header />

      <h2 style={{ textAlign: "center", marginTop: "30px", color: "#333" }}>
        ¡Nuestras Especialidades!
      </h2>

      <div style={estilosHome.cardContainerGrid}>
        {data_pizzas}
      </div>
    </div>
  );
};

export default Home;
