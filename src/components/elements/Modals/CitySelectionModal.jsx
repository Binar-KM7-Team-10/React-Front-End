import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import ButtonIconClose from "../Button/ButtonIconClose";
import useFetchCities from "../../../hooks/useFetchCities";

const CitySelectionModal = ({ city, isOpen, onClose, onSelect }) => {
  // console.log(city)
  const [searchQuery, setSearchQuery] = useState("");
  const [recentCities, setRecentCities] = useState(city);

  if (!isOpen) return null;

  const clearRecentCities = () => {
    setRecentCities([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="bg-white w-full max-w-xl rounded-2xl overflow-hidden relative transform transition-all duration-300 ease-out">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 flex items-center border rounded-lg p-2">
              <Search className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Masukkan Kota atau Negara"
                className="ml-2 flex-1 outline-none text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div onClick={onClose}>
            <ButtonIconClose/>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-md px-2">Pencarian Terkini</h3>
              <button
                className="text-red-500 text-sm"
                onClick={clearRecentCities}
              >
                Hapus
              </button>
            </div>

            <div className="space-y-4 mt-4">
              {recentCities
                .filter((city) =>
                  city.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .slice(0, 5)
                .map((city) => (
                  <div
                    key={city.id}
                    className="flex items-center justify-between p-2 border-b cursor-pointer hover:bg-[#E2D4F0]"
                    onClick={() => onSelect(city.name)}
                  >
                    <span>{city.name}</span>
                    <X className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              {recentCities.length === 0 && (
                <p className="text-gray-500 text-sm text-center">
                  Tidak ada kota terkini.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySelectionModal;
