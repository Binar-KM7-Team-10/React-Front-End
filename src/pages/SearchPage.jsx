import React, { useContext } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import FlightSearch from "../components/fragments/FlightSearch/FlightSearch";
import { useAuth } from "../contexts/AuthContext";

const SearchPage = () => {
  const { isAuth } = useAuth();
  return (
    <div>
      <Navbar search={true} type={isAuth ? "auth" : "nonAuth"} />
      <FlightSearch />
    </div>
  );
};

export default SearchPage;
