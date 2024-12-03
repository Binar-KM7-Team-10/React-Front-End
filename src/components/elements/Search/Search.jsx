import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="relative flex flex-1 items-center">
      <input
        type="text"
        placeholder="Cari di sini..."
        className="hidden md:block w-full rounded-2xl h-[48px] bg-[#EEEEEE] pl-4 pr-12 py-2 text-[14px] text-[#8A8A8A]"
      />
      <FiSearch
        className="absolute right-3 text-gray-400 hidden md:block"
        size={20}
      />
    </div>
  );
};

export default Search;
