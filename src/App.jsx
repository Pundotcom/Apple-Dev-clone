import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// components
import Narbar from "./components/Narbar";
import Banner from "./components/Banner";
import Promo from "./components/Promo";
import Plan from "./components/Plan";
import Product from "./components/Product";
import Build from "./components/Build";
import ADP from "./components/ADP";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Narbar />
      <Banner />
      <Promo />
      <Plan />
      <Product />
      <Build />
      <ADP />
      <Links />
      <Footer />
    </>
  );
}

export default App;
