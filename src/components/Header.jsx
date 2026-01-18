import React from "react";
import headerImage from "../assets/header.jpg";

const Header = () => {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
  };

  return (
    <header style={headerStyle} className="d-flex align-items-center justify-content-center text-white text-center">
      <div className="px-3">
        <h1 className="display-4 fw-bold border-bottom border-2 pb-2">¡Pizzeria Mamma Mia!</h1>
        <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;