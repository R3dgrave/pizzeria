import React from "react";
import Button from "react-bootstrap/Button";
import { FaEye, FaCartShopping } from "react-icons/fa6";
import { formatCurrency } from "../utils/formatCurrency";

const CardPizza = ({ image, name, ingredients, price }) => {
  const estilos = {
    cardContainer: {
      width: "350px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      backgroundColor: "white",
      margin: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },

    imageContainer: {
      width: "100%",
      height: "200px",
      overflow: "hidden",
    },

    imageStyle: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    content: {
      padding: "15px",
    },

    nameStyle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#dc3545",
      marginBottom: "10px",
      textAlign: "center",
    },

    ingredientsList: {
      fontSize: "0.9rem",
      color: "#6c757d",
      listStyleType: "none",
      paddingLeft: "0",
      marginBottom: "15px",
    },

    ingredientItem: {
      marginBottom: "5px",
      borderBottom: "1px dotted #e9ecef",
      paddingBottom: "3px",
    },

    priceStyle: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#28a745",
      textAlign: "center",
      margin: "15px 0",
    },
    buttonsGroup: {
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      backgroundColor: "#f8f9fa",
      borderTop: "1px solid #e9ecef",
    },

    buttonContent: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
  };

  const formattedPrice = formatCurrency(price);

  return (
    <div style={estilos.cardContainer}>
      <div style={estilos.imageContainer}>
        <img src={image} alt={`Pizza ${name}`} style={estilos.imageStyle} />
      </div>

      <div style={estilos.content}>
        <h3 style={estilos.nameStyle}>{name}</h3>

        <h5 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
          Ingredientes:
        </h5>
        <ul style={estilos.ingredientsList}>
          {ingredients.map((ing, index) => (
            <li key={index} style={estilos.ingredientItem}>
              • {ing}
            </li>
          ))}
        </ul>
      </div>

      <p style={estilos.priceStyle}>{formattedPrice}</p>

      <div style={estilos.buttonsGroup}>
        <Button variant="outline-primary" size="sm">
          <span style={estilos.buttonContent}>
            <FaEye /> Ver más
          </span>
        </Button>

        <Button variant="success" size="sm">
          <span style={estilos.buttonContent}>
            <FaCartShopping /> Agregar al carrito
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CardPizza;
