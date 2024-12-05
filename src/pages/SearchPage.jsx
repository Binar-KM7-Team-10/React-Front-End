import React from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import FlightSearch from "../components/fragments/FlightSearch/FlightSearch";

const SearchPage = () => {
  return (
    <div>
      <Navbar search={true} type={"auth"} />
      <FlightSearch />
    </div>
  );
};

export default SearchPage;
