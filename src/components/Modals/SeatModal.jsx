import React from "react";
import { Check, X } from "lucide-react";

const Modal = ({ isOpen, onClose, onSelect, selectedClass }) => {
  if (!isOpen) return null;

  const seatClasses = [
    { label: "Economy", price: "IDR 4.950.000" },
    { label: "Premium Economy", price: "IDR 7.550.000" },
    { label: "Business", price: "IDR 29.220.000" },
    { label: "First Class", price: "IDR 87.620.000" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg relative space-y-2 p-6 w-[400px] h-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-3"
        >
          <X size={24} />
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-medium text-center mb-4">Seat Class</h2>

        {/* Seat Classes */}
        <div className="space-y-3">
          {seatClasses.map((seat) => (
            <div
              key={seat.label}
              className={`py-2 px-4 cursor-pointer rounded-md border-b border-gray-300 pb-2 ${
                selectedClass === seat.label
                  ? "bg-[#4B1979] text-white font-bold"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => onSelect(seat.label)}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[14px]">{seat.label}</span>
                  <span
                    className={`${
                      selectedClass === seat.label
                        ? "text-white text-[14px] font-medium"
                        : "text-[#7126B5] text-[14px]"
                    }`}
                  >
                    {seat.price}
                  </span>
                </div>
                {/* Checkmark if selected */}
                {selectedClass === seat.label && (
                  <div className="flex items-center justify-center w-6 h-6 bg-[#73CA5C] rounded-full">
                    <Check className="text-white" size={16} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="mt-4 flex justify-end">
          <button
            className="w-[150px] bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-[#4B1979] transition"
            onClick={onClose}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
