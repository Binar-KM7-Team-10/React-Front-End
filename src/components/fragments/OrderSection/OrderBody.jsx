import React, { useCallback, useEffect, useMemo, useState } from "react";
import DataPemesan from "../OrderCards/DataPemesan";
import DataPenumpang from "../OrderCards/DataPenumpang";
import PesananKursi from "../OrderCards/PesananKursi";
import DetailPenerbangan from "../OrderCards/DetailPenerbangan";
import { Link, useParams } from "react-router-dom";
import { useGetBookingById } from "../../../hooks/useBooking";
import { useSearchContext } from "../../../contexts/searchFlightContext";

const OrderBody = () => {
  const { id } = useParams();
  const { dataBooking, loading, error } = useGetBookingById(id);
  const { getSearchParamsFromCookies } = useSearchContext();

  const passangers = getSearchParamsFromCookies().psg;
  const arryPsg = passangers ? passangers.split(".") : [];
  const intArryPsg = arryPsg.map((str) => parseInt(str));
  const totalSeatsRequired = intArryPsg.reduce((a, b) => a + b, 0);

  const [isSaved, setIsSaved] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isValid, setIsValid] = useState({
    pemesan: false,
    penumpang: false,
    kursi: false,
  });
  console.log(isValid)

  const seatList = useMemo(
    () => (dataBooking?.seat?.map ? dataBooking.seat.map : []),
    [dataBooking]
  );

  const handleSeatSelection = useCallback(
    (seats) => {
      setSelectedSeats(seats);
      const isValidSeats = seats.length === totalSeatsRequired;
      setIsValid((prevState) => ({
        ...prevState,
        kursi: isValidSeats,
      }));
      // console.log("Data Kursi:", seats);
    },
    [totalSeatsRequired]
  );

  const [dataPemesan, setDataPemesan] = useState(null);

  const handleDataPemesanSubmit = (data) => {
    setDataPemesan(data);
    setIsValid((prevState) => ({
      ...prevState,
      pemesan: !!data,
    }));
    // console.log("Data Pemesan:", data);
  };

  const [dataPenumpang, setDataPenumpang] = useState([]);
  console.log("Data Penumpang:", dataPenumpang);
  const handlePenumpangDataChange = useCallback(
    (index, newData) => {
      setDataPenumpang((prevData) => {
        const updatedData = [...prevData];
        updatedData[index] = newData;
        console.log(updatedData)
        return updatedData;
      });
    },
    [dataPenumpang]
  );

  useEffect(() => {
    if (dataPenumpang.length != 0) {
      const isAllDataValid = dataPenumpang.every((penumpang) =>
        Object.values(penumpang || {}).every((field) => field)
      );
      setIsValid((prevState) => ({
        ...prevState,
        penumpang: isAllDataValid,
      }));
    }
  }, [handlePenumpangDataChange])

  const handleSave = () => {
    if (Object.values(isValid).every((status) => status)) {
      setIsSaved(true);
      console.log("Data Pemesan:", dataPemesan);
      console.log("Data Penumpang:", dataPenumpang);
      console.log("Kursi yang dipilih:", selectedSeats);
    } else {
      alert("Silakan lengkapi semua data sebelum menyimpan.");
    }
  };

  if (loading) return <div>Loading booking details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="my-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg md:flex gap-6">
        <div className="left-section w-full space-y-6 md:w-7/12 flex-col">
          <DataPemesan
            onValidate={(status) => setIsValid((prev) => ({ ...prev, pemesan: status }))}
            onSubmit={handleDataPemesanSubmit}
          />
          <DataPenumpang
            dataPsg={intArryPsg}
            onPenumpangChange={handlePenumpangDataChange}
          />
          <PesananKursi
            seatList={seatList}
            totalSeatsRequired={totalSeatsRequired}
            onSeatSelect={handleSeatSelection}
          />
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className={`w-11/12 max-w-2xl py-4 rounded-lg text-xl transition-opacity shadow-md ${
                isSaved || Object.values(isValid).includes(false)
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-[#7126B5] text-white hover:opacity-90"
              }`}
              disabled={isSaved || Object.values(isValid).includes(false)}
            >
              Simpan
            </button>
          </div>
        </div>

        <div className="w-full md:w-5/12 mt-8 md:mt-0">
          {dataBooking ? (
            <DetailPenerbangan bookingData={dataBooking} arryPsg={intArryPsg} />
          ) : (
            <div>Memuat detail penerbangan...</div>
          )}
          {isSaved && (
            <div className="mt-6 flex justify-center">
              <Link to="/payment">
                <button className="w-[350px] bg-[#FF0000] text-white py-4 rounded-[12px] text-xl hover:opacity-90 transition-opacity shadow-md">
                  Lanjut Bayar
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderBody;