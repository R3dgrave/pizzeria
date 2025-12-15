import React from "react";
import headerImage from "../assets/header.jpg"; 

const Header = () => {

  const estilos = {
    header: {
      backgroundImage: `url(${headerImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      
      height: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    textoContenedor: {
      textAlign: "center",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
      borderBottom: "2px solid white",
      paddingBottom: "10px",
    },
  };

  return (
    <header style={estilos.header}>
      <div style={estilos.textoContenedor}>
        <h1>¡Pizzeria Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
