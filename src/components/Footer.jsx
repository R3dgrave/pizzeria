import React from "react";
import { IoPizza } from "react-icons/io5";

const Footer = () => {
  const añoActual = new Date().getFullYear();

  const estilos = {
    footerContainer: {
      backgroundColor: "#343a40",
      color: "white",
      padding: "20px 0",
      textAlign: "center",
      fontSize: "0.9rem",
      marginTop: "auto",
      width: "100%",
      boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
    },
    footerText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
    },
    pizzaIcon: {
      color: "#dc3545",
      fontSize: "1.2rem",
    },
  };

  return (
    <footer style={estilos.footerContainer}>
      <div style={estilos.footerText}>
        <IoPizza style={estilos.pizzaIcon} />
        <span>
          © {añoActual} - ¡Pizzería Mamma Mia! - Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
