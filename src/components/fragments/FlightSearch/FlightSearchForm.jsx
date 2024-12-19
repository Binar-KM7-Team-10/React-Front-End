import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PlaneTakeoff,
  PlaneLanding,
  Calendar1,
  RockingChair,
} from "lucide-react";
import logoreturn from "../../../assets/Images/return.svg";
import CitySelectionModal from "../../elements/Modals/CitySelectionModal";
import PassengerSelector from "../../elements/Modals/PassengerModal";
import DatePickModal from "../../elements/Modals/DateModal";
import Switch from "../../elements/Switch/Switch";
import SeatClassModal from "../../elements/Modals/SeatModal";
import { useSearchContext } from "../../../contexts/searchFlightContext";
import useFetchCities from "../../../hooks/useFetchCities";

const FlightSearchForm = () => {

  const { setSearchParams } = useSearchContext()

  const { cities, loading } = useFetchCities();

  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFromCity, setSelectedFromCity] = useState("Jakarta");
  const [selectedToCity, setSelectedToCity] = useState("Melbourne");
  const [isSelectingFrom, setIsSelectingFrom] = useState(true);
  const [passengerModalOpen, setPassengerModalOpen] = useState(false);
  const [passengerCounts, setPassengerCounts] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

  const today = new Date();
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [isSelectingDeparture, setIsSelectingDeparture] = useState(true);
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(null);

  const [seatClassModalOpen, setSeatClassModalOpen] = useState(false);
  const [selectedSeatClass, setSelectedSeatClass] = useState("Business");
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  // const handleSwitchChange = (value) => {
  //   setIsRoundTrip(value);
  // };

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

  const handleSwitchChange = (checked) => {
    setIsSwitchOn(checked);
    setIsRoundTrip(checked);
  };

  const handleCitySwap = () => {
    setSelectedFromCity(selectedToCity);
    setSelectedToCity(selectedFromCity);
  };
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const formatDpDate = new Date(departureDate)
    const formatRetDate = new Date(returnDate)
    setSearchParams({
      dpCity: selectedFromCity,
      arCity: selectedToCity,
      dpDate: `${formatDpDate.getFullYear()}-${(formatDpDate.getMonth() + 1).toString().padStart(2, "0")}-${formatDpDate.getDate().toString().padStart(2, "0")}`,
      retDate: `${formatRetDate.getFullYear()}-${(formatRetDate.getMonth() + 1).toString().padStart(2, "0")}-${formatRetDate.getDate().toString().padStart(2, "0")}`,
      psg: `${passengerCounts.adult}.${passengerCounts.child}.${passengerCounts.infant}`,
      seatClass: selectedSeatClass,
    });
    navigate("/search");
  };


  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <form className="bg-white rounded-[12px] shadow-xl  mx-4 -mt-14 relative z-10 w-full max-w-[968px] max-H-[232px] space-y-6" onSubmit={handleSearch}>
        <div className="p-6 space-y-8">
          <h1 className="text-center sm:text-left text-xl sm:text-xl lg:text-xl font-bold">
            Pilih Jadwal Penerbangan spesial di{" "}
            <span className="text-purple-600">TiketGo!</span>
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

            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer" onClick={handleCitySwap}>
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
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-24">
            <div className="flex items-center gap-6 ">
              <div className="flex items-center gap-2">
                <Calendar1 className="text-gray-400" size={20} />
                <span className="text-sm text-gray-500">Date</span>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="cursor-pointer"
                  onClick={() => handleDateModalOpen(true)}
                >
                  <span className="text-sm sm:text-base text-[#8A8A8A]">Departure</span>
                  <p className="border-b-[1.5px] w-[140px] border-gray-300 pb-2 font-medium text-sm">
                    {departureDate
                      ? `${departureDate.getDate()} ${[
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

                <div
                  className={`cursor-pointer ${!isSwitchOn ? "pointer-events-none opacity-50" : ""}`}
                  onClick={isSwitchOn ? () => handleDateModalOpen(false) : null}
                >
                  <span className="text-[#8A8A8A] text-md">Return</span>
                  <p className="border-b-[1.5px] w-[140px] border-[#D0D0D0] pb-3 font-medium text-sm text-[#7126B5]">
                    {returnDate
                      ? `${returnDate.getDate()} ${[
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
              </div>

              <div className="flex items-center gap-4">
                <Switch
                  checked={isSwitchOn}
                  onChange={handleSwitchChange}
                  className="h-6 w-12"
                />
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
                  <p className="border-b-[1.5px] w-[140px] border-gray-300 pb-2 font-medium text-sm">
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
                  <p className="border-b-[1.5px] w-[140px] border-gray-300 pb-2 font-medium text-sm">
                    {selectedSeatClass}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-b-xl font-bold text-sm sm:text-base hover:bg-[#4B1979] transition">
          Cari Penerbangan
        </button>
      </form>
      {!loading &&
        <CitySelectionModal
          city={cities}
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSelect={handleCitySelect}
        />
      }

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
            : "Pilih Tanggal Pulang"
        }
      />

      <SeatClassModal
        isOpen={seatClassModalOpen}
        onClose={handleSeatClassModalClose}
        onSelect={handleSelectSeatClass}
      />
    </div>
  );
};

export default FlightSearchForm;
