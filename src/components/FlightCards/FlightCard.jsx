import React, { useState, useEffect } from "react";
import Image from "../../assets/Images/image.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const dummyFlightDeals = [
  {
    id: 1,
    origin: "Jakarta",
    destination: "Bangkok",
    airline: "AirAsia",
    dateRange: "20 - 30 Maret 2023",
    price: 950000,
    imageUrl: Image,
    isLimited: true,
    discount: null,
  },
  {
    id: 2,
    origin: "Jakarta",
    destination: "Sydney",
    airline: "AirAsia",
    dateRange: "5 - 25 Maret 2023",
    price: 3650000,
    imageUrl: Image,
    isLimited: false,
    discount: "50% OFF",
  },
  {
    id: 3,
    origin: "Jakarta",
    destination: "Sydney",
    airline: "AirAsia",
    dateRange: "5 - 25 Maret 2023",
    price: 3650000,
    imageUrl: Image,
    isLimited: false,
    discount: "50% OFF",
  },
  {
    id: 4,
    origin: "Jakarta",
    destination: "Sydney",
    airline: "AirAsia",
    dateRange: "5 - 25 Maret 2023",
    price: 3650000,
    imageUrl: Image,
    isLimited: false,
    discount: "50% OFF",
  },
  {
    id: 5,
    origin: "Jakarta",
    destination: "Bangkok",
    airline: "AirAsia",
    dateRange: "20 - 30 Maret 2023",
    price: 950000,
    imageUrl: Image,
    isLimited: true,
    discount: null,
  },
];

const FlightCard = ({ deal }) => {
  const formatPrice = (price) => new Intl.NumberFormat("id-ID").format(price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative p-4">
        <img
          src={deal.imageUrl}
          alt={`${deal.destination} view`}
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
          {`${deal.origin} -> ${deal.destination}`}
        </h2>
        <p className="text-[#7126B5] mb-1 font-bold text-[10px]">{deal.airline}</p>
        <p className="text-gray-600 font-medium mb-2 text-[10px]">{deal.dateRange}</p>
        <div className="flex items-center">
          <h1 className="text-gray-600 text-[12px] font-medium">
            Mulai dari
            <span className="text-[#FF0000] font-bold text-[12px]">
              {" "}
              IDR{formatPrice(deal.price)}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

const FlightDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setDeals(dummyFlightDeals);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch flight deals");
        setLoading(false);
      }
    };
    fetchDeals();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-8 md:px-36">
        {loading
          ? [...Array(5)].map((_, index) => (
              <div
                key={index}
                className="p-4 bg-white border rounded-lg shadow-sm "
              >
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
            ))
          : deals.map((deal) => <FlightCard key={deal.id} deal={deal} />)}
      </div>
    </div>
  );
};

export default FlightDeals;
