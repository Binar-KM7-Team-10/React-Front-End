import React, { useState, useEffect } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import Hero from "../components/fragments/Hero/Hero";
import FlightCards from "../components/fragments/FlightCards/FlightCard";
import Loading from "../../src/components/elements/Loading/Loading";
import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const { isAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar search={true} type={isAuth ? "auth" : "nonAuth"} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <FlightCards />
        </>
      )}
    </div>
  );
};

export default HomePage;
