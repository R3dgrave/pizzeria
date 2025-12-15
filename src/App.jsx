import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer/>
    </>
  );
};

export default App;
