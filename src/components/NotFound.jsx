import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h2>404 - Pagina no encontrada</h2>
      <p>La pagina que estas buscando no existe</p>
      <Link to="/">Regresar a la página principal</Link>
    </div>
  );
};

export default NotFound;
