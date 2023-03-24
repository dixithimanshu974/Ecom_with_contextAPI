import React from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  var name = "SHOPIFY";
  return (
    <>
      <HeroSection myData={name} />
      <FeaturedProducts/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
