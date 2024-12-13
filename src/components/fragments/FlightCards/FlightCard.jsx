import React, { useState, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFlightDeals from "../../../hooks/useDestination";
import ContinentFilter from "../../elements/Categories/Categori";

const FlightDeals = () => {
  const [page, setPage] = useState(1);
  const [continent, setContinent] = useState("Asia");
  const { deals, loading, error, pagination } = useFlightDeals(page, continent);

  const handleContinentChange = useCallback((newContinent) => {
    setContinent(newContinent);
    setPage(1);
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || (pagination && newPage > pagination.totalPage)) return;
    setPage(newPage);
  };

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <ContinentFilter
        onFilterChange={handleContinentChange}
        activeFilter={continent}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-8 md:px-24 max-w-6xl mx-auto pt-5">
        {loading ? (
          [...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative p-4">
                <Skeleton
                  width="100%"
                  height={100}
                  className="mb-4 rounded-lg"
                />
                <Skeleton width="80%" height={12} className="mb-2" />
                <Skeleton width="40%" height={10} className="mb-1" />
                <Skeleton width="70%" height={10} className="mb-2" />
                <Skeleton width="100%" height={14} className="mt-1" />
              </div>
            </div>
          ))
        ) : deals.length > 0 ? (
          deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative p-4">
                <img
                  src={deal.arrivalCityImageUrl || "default-image-url.jpg"}
                  alt={`${deal.arrivalCity} view`}
                  className="w-full h-[100px] object-cover rounded-lg"
                />
                {(deal.discount || deal.isLimited) && (
                  <div className="absolute top-4 right-4 w-[72px] h-[24px] pt-1 bg-purple-500 text-[10px] text-center text-white rounded-l-full font-medium">
                    {deal.discount || "Limited!"}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-[12px] font-medium mb-1">
                  {`${deal.departureCity} -> ${deal.arrivalCity}`}
                </h2>
                <p className="text-[#7126B5] mb-1 font-bold text-[10px]">
                  {deal.airline}
                </p>
                <p className="text-gray-600 font-medium mb-2 text-[10px]">
                  {`${new Date(deal.startDate).toLocaleDateString()} - ${new Date(deal.endDate).toLocaleDateString()}`}
                </p>
                <div className="flex items-center">
                  <h1 className="text-gray-600 text-[12px] font-medium">
                    Mulai dari
                    <span className="text-[#FF0000] font-bold text-[12px]">
                      {" "}
                      IDR{" "}
                      {deal.minPrice ? deal.minPrice.toLocaleString() : "N/A"}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center min-h-[200px]">
            <span>No flight deals available</span>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4 items-center">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className={`px-4 py-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          Prev
        </button>
        <span className="mx-4 text-sm font-medium text-gray-700">
          {page} of {pagination ? pagination.totalPage : 1}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={pagination ? page >= pagination.totalPage : false}
          className={`px-4 py-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlightDeals;
