import React from "react";
import Navbar from "../components/fragments/Navbar";
import Hero from "../components/fragments/Hero";
import Categori from "../components/Categories/Categori";
import FlightCards from "../components/FlightCards/FlightCard";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categori />
      <FlightCards />
    </div>
  );
};

export default HomePage;
