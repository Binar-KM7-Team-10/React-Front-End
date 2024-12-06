import React from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import Hero from "../components/fragments/Hero/Hero";
import Categori from "../components/elements/Categories/Categori";
import FlightCards from "../components/fragments/FlightCards/FlightCard";

const HomePage = () => {
  return (
    <div>
      <Navbar search={true} type={"nonAuth"}/>
      <Hero />
      <Categori />
      <FlightCards />
    </div>
  );
};

export default HomePage;
