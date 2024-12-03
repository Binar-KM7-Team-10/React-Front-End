import React from "react";
import { FiBox } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";

const Filter = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-1/">
      <h3 className="font-medium text-gray-700">Filter</h3>
      <ul className="mt-2 space-y-3">
        <li className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FiBox className="w-5 h-5 mr-2" />
            <span>Transit</span>
          </div>
          <button className="text-purple-600">&gt;</button>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FiHeart className="w-5 h-5 mr-2" />
            <span>Fasilitas</span>
          </div>
          <button className="text-purple-600">&gt;</button>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FiDollarSign className="w-5 h-5 mr-2" />
            <span>Harga</span>
          </div>
          <button className="text-purple-600">&gt;</button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
