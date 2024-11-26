import React, { useState } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  Calendar1,
  RockingChair,
} from "lucide-react";
import logoreturn from "../../assets/Images/return.svg";
import CitySelectionModal from "../Modals/CitySelectionModal";
import PassengerSelector from "../Modals/PassengerModal";
import DatePickModal from "../Modals/DateModal";
import Switch from "../Switch/Switch";
import SeatClassModal from "../Modals/SeatModal";

const FlightSearchForm = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFromCity, setSelectedFromCity] = useState("Jakarta (JKTA)");
  const [selectedToCity, setSelectedToCity] = useState("Melbourne (MLB)");
  const [isSelectingFrom, setIsSelectingFrom] = useState(true);
  const [passengerModalOpen, setPassengerModalOpen] = useState(false);
  const [passengerCounts, setPassengerCounts] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [isSelectingDeparture, setIsSelectingDeparture] = useState(true);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const [seatClassModalOpen, setSeatClassModalOpen] = useState(false);
  const [selectedSeatClass, setSelectedSeatClass] = useState("Business");

  const handleModalOpen = (isFrom) => {
    setIsSelectingFrom(isFrom);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCitySelect = (city) => {
    if (isSelectingFrom) {
      setSelectedFromCity(city);
    } else {
      setSelectedToCity(city);
    }
    setIsModalOpen(false);
  };

  const handlePassengerModalOpen = () => {
    setPassengerModalOpen(true);
  };

  const handlePassengerModalClose = () => {
    setPassengerModalOpen(false);
  };

  const handleUpdatePassengers = (updatedCounts) => {
    setPassengerCounts(updatedCounts);
  };

  const handleDateModalOpen = (isDeparture) => {
    setIsSelectingDeparture(isDeparture);
    setDateModalOpen(true);
  };

  const handleDateModalClose = () => {
    setDateModalOpen(false);
  };

  const handleDateSelect = (date) => {
    if (isSelectingDeparture) {
      setDepartureDate(date);
    } else {
      setReturnDate(date);
    }
    setDateModalOpen(false);
  };

  const handleSeatClassModalOpen = () => {
    setSeatClassModalOpen(true);
  };

  const handleSeatClassModalClose = () => {
    setSeatClassModalOpen(false);
  };

  const handleSelectSeatClass = (seatClass) => {
    setSelectedSeatClass(seatClass);
  };

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl p-6 mx-4 -mt-20 relative z-10 w-full max-w-[968px] space-y-6">
        <h1 className="text-center sm:text-left text-xl sm:text-xl lg:text-xl font-bold">
          Pilih Jadwal Penerbangan spesial di{" "}
          <span className="text-purple-600">Tiketku!</span>
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24 relative">
          <div
            className="flex flex-wrap items-center md:items-start gap-2 md:gap-4 cursor-pointer"
            onClick={() => handleModalOpen(true)}
          >
            <div className="flex items-center gap-2">
              <PlaneTakeoff className="text-gray-400" size={20} />
              <span className="text-sm text-gray-500">From</span>
            </div>
            <div className="border-b-[1.5px] border-gray-300 pb-2 w-full md:max-w-[300px]">
              <p className="font-medium text-base sm:text-lg">
                {selectedFromCity}
              </p>
            </div>
          </div>

          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={logoreturn} alt="Return Icon" />
          </div>

          <div
            className="flex flex-wrap items-center md:items-start gap-2 md:gap-4 cursor-pointer"
            onClick={() => handleModalOpen(false)}
          >
            <div className="flex items-center gap-2">
              <PlaneLanding className="text-gray-400" size={20} />
              <span className="text-sm text-gray-500">To</span>
            </div>
            <div className="border-b-[1.5px] border-gray-300 pb-2 w-full md:max-w-[300px]">
              <p className="font-medium text-base sm:text-lg">
                {selectedToCity}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <Calendar1 className="text-gray-400" size={20} />
              <span className="text-sm text-gray-500">Date</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div
                className="space-y-1 cursor-pointer"
                onClick={() => handleDateModalOpen(true)}
              >
                <span className="text-sm sm:text-base text-[#8A8A8A]">
                  Departure
                </span>
                <p className="border-b-[1.5px] w-auto max-w-[140px] border-gray-300 pb-2 font-medium text-base">
                  {departureDate
                    ? `${departureDate.getDate()} ${
                        [
                          "Januari",
                          "Februari",
                          "Maret",
                          "April",
                          "Mei",
                          "Juni",
                          "Juli",
                          "Agustus",
                          "September",
                          "Oktober",
                          "November",
                          "Desember",
                        ][departureDate.getMonth()]
                      } ${departureDate.getFullYear()}`
                    : "Pilih Tanggal"}
                </p>
              </div>
              {isRoundTrip && (
                <div
                  className="space-y-1 cursor-pointer"
                  onClick={() => handleDateModalOpen(false)}
                >
                  <span className="text-[#8A8A8A] text-md">Return</span>
                  <p className="border-b-[1.5px] w-[140px] border-[#D0D0D0] pb-3 font-medium text-sm text-[#7126B5]">
                    {returnDate
                      ? `${returnDate.getDate()} ${
                          [
                            "Januari",
                            "Februari",
                            "Maret",
                            "April",
                            "Mei",
                            "Juni",
                            "Juli",
                            "Agustus",
                            "September",
                            "Oktober",
                            "November",
                            "Desember",
                          ][returnDate.getMonth()]
                        } ${returnDate.getFullYear()}`
                      : "Pilih Tanggal"}
                  </p>
                </div>
              )}
              <Switch />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <RockingChair className="text-gray-400" size={20} />
              <span className="text-sm text-gray-500">To</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div
                className="space-y-1 cursor-pointer"
                onClick={handlePassengerModalOpen}
              >
                <span className="text-sm sm:text-base text-[#8A8A8A]">
                  Passengers
                </span>
                <p className="border-b-[1.5px] border-gray-300 pb-2 font-medium text-base">
                  {`${passengerCounts.adult + passengerCounts.child + passengerCounts.infant} Penumpang`}
                </p>
              </div>
              <div
                className="space-y-1 cursor-pointer"
                onClick={handleSeatClassModalOpen}
              >
                <span className="text-sm sm:text-base text-[#8A8A8A]">
                  Seat Class
                </span>
                <p className="border-b-[1.5px] w-[140px] border-gray-300 pb-2 font-medium text-base">
                  {selectedSeatClass}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-[#4B1979] transition">
          Cari Penerbangan
        </button>
      </div>

      <CitySelectionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSelect={handleCitySelect}
      />

      <PassengerSelector
        isOpen={passengerModalOpen}
        onClose={handlePassengerModalClose}
        passengerCounts={passengerCounts}
        onUpdatePassengers={handleUpdatePassengers}
      />

      <DatePickModal
        isOpen={dateModalOpen}
        onClose={handleDateModalClose}
        onSelect={handleDateSelect}
        selectedDate={isSelectingDeparture ? departureDate : returnDate}
        title={
          isSelectingDeparture
            ? "Pilih Tanggal Keberangkatan"
            : "Pilih Tanggal Kepulangan"
        }
      />

      <SeatClassModal
        isOpen={seatClassModalOpen}
        onClose={handleSeatClassModalClose}
        onSelect={handleSelectSeatClass}
        selectedClass={selectedSeatClass}
      />
    </div>
  );
};

export default FlightSearchForm;