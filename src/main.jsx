import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { DataProvider } from "./context/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/pizzeria">
      <DataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
);
