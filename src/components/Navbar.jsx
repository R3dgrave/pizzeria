import React from "react";
import Button from "react-bootstrap/Button";
import { FaCartShopping } from "react-icons/fa6";
import { IoPizza } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { formatCurrency } from "../utils/formatCurrency";

const Navbar = () => {
  const total = 25000;
  const token = true;

  const isMobile = window.innerWidth < 768;

  const estilos = {
    navbarContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      padding: "10px 20px",
      backgroundColor: "#212529",
      color: "white",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
      flexWrap: "wrap",
    },

    navbarBrand: {
      color: "#dc3545",
      textDecoration: "none",
      fontSize: "1.5rem",
      fontWeight: "bold",
      width: isMobile ? "100%" : "auto",
      marginBottom: isMobile ? "10px" : "0",
    },

    navbarLeft: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
      gap: "15px",
      width: isMobile ? "100%" : "auto",
      justifyContent: "flex-start",
    },

    navbarButtonsGroup: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      flexWrap: isMobile ? "wrap" : "nowrap",
    },

    authButtons: {
      display: "flex",
      gap: "5px",
    },

    totalDisplay: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "1.1rem",
      border: "2px solid #dc3545",
      padding: "5px 10px",
      borderRadius: "5px",
      width: isMobile ? "100%" : "auto",
      justifyContent: "center",
      marginTop: isMobile ? "10px" : "0",
      order: isMobile ? 3 : 0,
    },

    buttonContent: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
  };

  // LOGICA PARA MOSTRAR BOTONES SEGUN EL ESTADO DE AUTENTICACION
  const renderAuthButtons = () => {
    return token ? (
      <div style={estilos.authButtons}>
        <Button variant="outline-light" size="sm">
          <span style={estilos.buttonContent}>
            <CgProfile /> {isMobile ? "" : "Profile"}
          </span>
        </Button>

        <Button variant="light" size="sm">
          <span style={estilos.buttonContent}>
            <CiLogout /> {isMobile ? "" : "Logout"}
          </span>
        </Button>
      </div>
    ) : (
      <div style={estilos.authButtons}>
        <Button variant="outline-light" size="sm">
          <span style={estilos.buttonContent}>
            <CiLogin /> {isMobile ? "" : "Login"}
          </span>
        </Button>

        <Button variant="danger" size="sm">
          <span style={estilos.buttonContent}>
            <CiLogin /> {isMobile ? "" : "Register"}
          </span>
        </Button>
      </div>
    );
  };

  const formattedTotal = formatCurrency(total);

  return (
    <div style={estilos.navbarContainer}>
      <a href="/" style={estilos.navbarBrand}>
        ¡Pizzería Mamma Mia!
      </a>

      <div style={estilos.navbarLeft}>
        <div style={estilos.navbarButtonsGroup}>
          <Button variant="danger" size="sm">
            <span style={estilos.buttonContent}>
              <IoPizza /> {isMobile ? "" : "Home"}
            </span>
          </Button>
          {renderAuthButtons()}
        </div>
      </div>

      <div style={estilos.totalDisplay}>
        <FaCartShopping /> <span> Total: {formattedTotal}</span>
      </div>
    </div>
  );
};

export default Navbar;
