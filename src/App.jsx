import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import { useUser } from "./context/UserContext";

const App = () => {
  const { isAuthenticated } = useUser();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={isAuthenticated ? <Profile/> : <LoginPage />}/>
          <Route path="/pizza/:pizzaId" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
