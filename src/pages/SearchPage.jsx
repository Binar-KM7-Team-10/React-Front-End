import React, { useContext } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import FlightSearch from "../components/fragments/FlightSearch/FlightSearch";
import { SearchContext } from "../contexts/searchFlightContext";

const SearchPage = () => {
  const { searchParams } = useContext(SearchContext)
  return (
    <div>
      <Navbar search={true} type={"auth"} />
      <FlightSearch />
    </div>
  );
};

export default SearchPage;
