import React from "react";

const ContinentFilter = ({ onFilterChange, activeFilter }) => {
  const continents = ["Asia", "Europe", "America", "Africa", "Australia"];

  return (
    <div className="mt-6 sm:mt-8 max-w-6xl mx-auto px-8 sm:px-6 md:px-24">
      <h1 className="font-bold text-lg py-3">Destinasi Favorit</h1>
      <div className="hidden md:block overflow-x-auto">
        <div className="flex gap-2 flex-nowrap">
          {continents.map((continent) => (
            <button
              key={continent}
              onClick={() => onFilterChange(continent)}
              className={`flex items-center gap-2 h-[48px] px-4 rounded-xl transition-colors duration-200 ease-in-out ${
                activeFilter === continent
                  ? "bg-[#7126B5] text-white"
                  : "bg-purple-100 text-gray-700 hover:bg-purple-200"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {continent}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinentFilter;
