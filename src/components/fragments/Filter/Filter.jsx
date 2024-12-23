import React, { useState } from "react";
import { FiBox } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";

const Filter = () => {
  // State untuk menyimpan status dropdown
  const [isTransitOpen, setIsTransitOpen] = useState(false);
  const [isFasilitasOpen, setIsFasilitasOpen] = useState(false);
  const [isHargaOpen, setIsHargaOpen] = useState(false);

  // Fungsi untuk menangani toggle dropdown
  const toggleDropdown = (category) => {
    if (category === 'transit') {
      setIsTransitOpen(!isTransitOpen);
    } else if (category === 'fasilitas') {
      setIsFasilitasOpen(!isFasilitasOpen);
    } else if (category === 'harga') {
      setIsHargaOpen(!isHargaOpen);
    }
  };

  return (
    <div className="bg-white p-6 m-4  rounded-md shadow-md">
      <h3 className="font-medium text-gray-700 pb-3">Filter</h3>
      <ul className="mt-2 space-y-3">
        <li className="flex justify-between items-center border-b border-gray-600 pb-3">
          <div className="flex items-center space-x-2">
            <FiBox className="w-5 h-5 mr-2" />
            <span>Transit</span>
          </div>
          <button
            onClick={() => toggleDropdown('transit')}
            className="text-purple-600"
          >
            &gt;
          </button>
        </li>
        {isTransitOpen && (
          <div className="pl-3 pt-2">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span className="ml-2">Option 1</span>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span className="ml-2">Option 2</span>
            </div>
          </div>
        )}

        <li className="flex justify-between items-center border-b border-gray-600 pb-3">
          <div className="flex items-center space-x-2">
            <FiHeart className="w-5 h-5 mr-2" />
            <span>Fasilitas</span>
          </div>
          <button
            onClick={() => toggleDropdown('fasilitas')}
            className="text-purple-600"
          >
            &gt;
          </button>
        </li>
        {isFasilitasOpen && (
          <div className="pl-3 pt-2">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span className="ml-2">Option A</span>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span className="ml-2">Option B</span>
            </div>
          </div>
        )}

        <li className="flex justify-between items-center pb-3">
          <div className="flex items-center space-x-2">
            <FiDollarSign className="w-5 h-5 mr-2" />
            <span>Harga</span>
          </div>
          <button
            onClick={() => toggleDropdown('harga')}
            className="text-purple-600"
          >
            &gt;
          </button>
        </li>
        {isHargaOpen && (
          <div className="pl-3 pt-2">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span className="ml-2">Option 1</span>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span className="ml-2">Option 2</span>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Filter;
