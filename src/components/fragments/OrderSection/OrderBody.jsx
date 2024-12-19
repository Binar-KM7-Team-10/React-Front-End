import React, { useCallback, useMemo, useState } from "react";
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
  // console.log(dataBooking)
  const { getSearchParamsFromCookies } = useSearchContext();

  const passangers = getSearchParamsFromCookies().psg;
  const arryPsg = passangers ? passangers.split(".") : [];
  const intArryPsg = arryPsg.map((str) => parseInt(str));
  const totalSeatsRequired = intArryPsg.reduce((a, b) => a + b, 0);

  const [submitData, setSubmitData] = useState({
    "itinerary": {
      "journeyType": "One-way",
      "outbound": 21,
      "inbound": null
    },
    "passenger": {
      "total": 3,
      "adult": 2,
      "child": 1,
      "baby": 1,
      "data": [
        {
          "label": "P1",
          "title": "Mr.",
                 "ageGroup": "Adult",
          "fullName": "Tony Stark",
          "familyName": "Downey Jr",
          "birthDate": "1960-12-01",
          "nationality": "United States of America",
          "identityNumber": "61719321830219",
          "issuingCountry": "United States of America",
          "expiryDate": "2027-01-01"
        },
        {
          "label": "P2",
          "title": "Mrs.",
                 "ageGroup": "Adult",
          "fullName": "Nastasha",
          "familyName": "Romanoff",
          "birthDate": "1980-11-21",
          "nationality": "United States of America",
          "identityNumber": "617191111830219",
          "issuingCountry": "United States of America",
          "expiryDate": "2027-05-01"
        },
             {
          "label": "P3",
          "title": "Master",
                 "ageGroup": "Child",
          "fullName": "Jasper",
          "familyName": "Javier",
          "birthDate": "2019-01-01",
          "nationality": "United States of America",
          "identityNumber": "61213321830219",
          "issuingCountry": "United States of America",
          "expiryDate": "2029-01-01"
        },
             {
                 "ageGroup": "Baby"
             }
      ]
    },
    "seat": {
      "outbound": [
        {
          "label": "P1",
          "seatNumber": "A9"
        },
        {
          "label": "P2",
          "seatNumber": "B9"
        },
             {
          "label": "P3",
          "seatNumber": "C9"
        }
      ],
      "inbound": null
    }
  });

  const [isSaved, setIsSaved] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isValid, setIsValid] = useState({
    pemesan: false,
    penumpang: false,
    kursi: false,
  });

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
      console.log("Data Kursi:", seats);
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
    // console.log("Data Pemesan:", dataPemesan);
  };

  const [dataPenumpang, setDataPenumpang] = useState([]);

  const handlePenumpangDataChange = useCallback(
    (index, newData) => {
      setDataPenumpang((prevData) => {
        const updatedData = [...prevData];
        updatedData[index] = newData;
        return updatedData;
      });

      // Validasi semua data penumpang
      const isAllDataValid = dataPenumpang.every((penumpang) =>
        Object.values(penumpang || {}).every((field) => field)
      );

      setIsValid((prevState) => ({
        ...prevState,
        penumpang: isAllDataValid,
      }));

      // console.log("Data Penumpang:", dataPenumpang);
    },
    [dataPenumpang]
  );

  const handleSave = () => {
    console.log("ok")
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
