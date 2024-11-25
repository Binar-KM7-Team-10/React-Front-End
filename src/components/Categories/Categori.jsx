import React, { useState } from "react";

const ContinentFilter = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const continents = [
    { id: 1, name: "Semua" },
    { id: 2, name: "Asia" },
    { id: 3, name: "Amerika" },
    { id: 4, name: "Australia" },
    { id: 5, name: "Eropa" },
    { id: 6, name: "Afrika" },
  ];

  const handleFilterClick = (continent) => {
    setActiveFilter(continent);
  };

  return (
      <div className="px-8 space-y-5 md:px-36">
          <h1 className="font-bold text-lg">Destinasi Favorit</h1>
      <div className="flex flex-wrap gap-2">
        {continents.map((continent) => (
          <button
            key={continent.id}
            onClick={() => handleFilterClick(continent.name)}
            className={`
            flex items-center gap-2 h-[48px] px-4 rounded-xl 
            transition-colors duration-200 ease-in-out
            ${
              activeFilter === continent.name
                ? "bg-[#7126B5] text-white"
                : "bg-purple-100 text-gray-700 hover:bg-purple-200"
            }
          `}
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
            {continent.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContinentFilter;
