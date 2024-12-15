import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FilterFlight from "../Filter/Filter";

const ButtonHeader = ({ filter }) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row w-full gap-4 md:gap-3">
      <button className="flex gap-8 bg-[#A06ECE] text-white rounded-[12px] p-5 w-full">
        <ArrowLeft />
        <Link to="/">Beranda</Link>
      </button>
      {filter ? <FilterFlight /> : ""}
    </div>
  );
};

export default ButtonHeader;
