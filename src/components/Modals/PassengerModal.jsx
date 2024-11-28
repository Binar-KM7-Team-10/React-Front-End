import React from "react";
import { X } from "lucide-react";
import { FaChild, FaChildDress, FaChildReaching } from "react-icons/fa6";
import ButtonSave from "../Button/ButtonSave";
import ButtonIconClose from "../Button/ButtonIconClose";

const PassengerSelector = ({
  isOpen,
  onClose,
  passengerCounts,
  onUpdatePassengers,
}) => {
  if (!isOpen) return null;

  const handleIncrement = (type) => {
    onUpdatePassengers({
      ...passengerCounts,
      [type]: passengerCounts[type] + 1,
    });
  };

  const handleDecrement = (type) => {
    if (passengerCounts[type] > 0) {
      onUpdatePassengers({
        ...passengerCounts,
        [type]: passengerCounts[type] - 1,
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-xl w-[360px] max-w-sm mx-4 overflow-hidden">
        <div className="pt-4 px-6 flex justify-end border-b pb-4" onClick={onClose}>
          <ButtonIconClose />
        </div>

        <div className="p-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b-[1px] pb-2">
              <div className="flex items-center gap-4">
                <FaChild size={24} className="text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold">Dewasa</h3>
                  <p className="text-sm text-gray-400">(12 tahun keatas)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrement("adult")}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <span className="text-xl font-medium">−</span>
                </button>
                <span className="w-8 text-center text-lg">
                  {passengerCounts.adult}
                </span>
                <button
                  onClick={() => handleIncrement("adult")}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <span className="text-xl font-medium">+</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-b-[1px] pb-2">
              <div className="flex items-center gap-4">
                <FaChildDress size={24} className="text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold">Anak</h3>
                  <p className="text-sm text-gray-400">(2 - 11 tahun)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrement("child")}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <span className="text-xl font-medium">−</span>
                </button>
                <span className="w-8 text-center text-lg">
                  {passengerCounts.child}
                </span>
                <button
                  onClick={() => handleIncrement("child")}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <span className="text-xl font-medium">+</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-b-[1px] pb-2">
              <div className="flex items-center gap-4">
                <FaChildReaching size={24} className="text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold">Bayi</h3>
                  <p className="text-sm text-gray-400">(Dibawah 2 tahun)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrement("infant")}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <span className="text-xl font-medium">−</span>
                </button>
                <span className="w-8 text-center text-lg">
                  {passengerCounts.infant}
                </span>
                <button
                  onClick={() => handleIncrement("infant")}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <span className="text-xl font-medium">+</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end" onClick={onClose}>
            <ButtonSave />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerSelector;
