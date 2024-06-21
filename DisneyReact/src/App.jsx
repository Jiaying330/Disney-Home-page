import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Explore from "./components/Explore";
import ComingSoon from "./components/ComingSoon";
import Vacation from "./components/Vacation";
import BundleAd from "./components/BundleAd";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <Products />
      <Explore />
      <ComingSoon />
      <Vacation />
      <BundleAd />
      <Footer />
    </>
  );
}

export default App;
