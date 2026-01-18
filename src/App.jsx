import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
//import Home from "./components/Home";
//import RegisterPage from "./components/RegisterPage";
//import LoginPage from "./components/LoginPage";
//import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/*<Home />*/}
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        {/*<Cart />*/}
        <Pizza />
      </main>
      <Footer />
    </div>
  );
};

export default App;