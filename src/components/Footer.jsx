import React from "react";
import { Container } from "react-bootstrap";
import { IoPizza } from "react-icons/io5";

const Footer = () => {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-auto w-100 shadow-lg">
      <Container className="d-flex justify-content-center align-items-center gap-2">
        <IoPizza className="text-danger fs-4" />
        <span className="small">
          © {añoActual} - ¡Pizzería Mamma Mia! - Todos los derechos reservados
        </span>
      </Container>
    </footer>
  );
};

export default Footer;