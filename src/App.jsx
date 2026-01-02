import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      {/*<RegisterPage/>*/}
      <LoginPage/>
      <Footer/>
    </>
  );
};

export default App;
