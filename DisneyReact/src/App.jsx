import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Explore from "./components/Explore";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <Products />
      <Explore />
    </>
  );
}

export default App;
