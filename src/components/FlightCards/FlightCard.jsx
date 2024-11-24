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
          className="w-full h-40 object-cover rounded-lg"
        />
        {(deal.discount || deal.isLimited) && (
          <div className="absolute top-4 right-4 px-4 py-2 bg-purple-500 text-sm text-white rounded-l-full">
            {deal.discount || "Limited!"}
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">
          {`${deal.origin} -> ${deal.destination}`}
        </h2>
        <p className="text-purple-600 mb-1 font-medium">{deal.airline}</p>
        <p className="text-gray-600 text-sm mb-2">{deal.dateRange}</p>
        <div className="flex items-center">
          <span className="text-gray-600 text-sm">Mulai dari </span>
          <span className="text-red-600 font-bold ml-1">
            IDR {formatPrice(deal.price)}
          </span>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-8">
        {loading
          ? [...Array(5)].map((_, index) => (
              <div
                key={index}
                className="p-4 bg-white border rounded-lg shadow-sm h-[350px]"
              >
                <Skeleton
                  width="100%"
                  height={150}
                  className="mb-8 rounded-lg"
                />
                <Skeleton width="90%" height={20} className="mb-2" />
                <Skeleton width="35%" height={20} className="mb-1" />
                <Skeleton width="65%" height={20} className="mb-1" />
                <Skeleton width="100%" height={20} />
              </div>
            ))
          : deals.map((deal) => <FlightCard key={deal.id} deal={deal} />)}
      </div>
    </div>
  );
};

export default FlightDeals;
