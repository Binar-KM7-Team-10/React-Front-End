import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataPemesan from "../OrderCards/DataPemesan";
import DataPenumpang from "../OrderCards/DataPenumpang";
import PesananKursi from "../OrderCards/PesananKursi";
import DetailPenerbangan from "../OrderCards/DetailPenerbangan";
import AlertCheckout from "../../elements/Alert/AlertCheckout";
import { useCreateBooking, useGetBookingById } from "../../../hooks/useBooking";
import { useSearchContext } from "../../../contexts/searchFlightContext";

const OrderBody = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dataBooking, loading, error, bookingCode } = useGetBookingById(id);
  const { createBooking, loadingBooking, errorBooking } = useCreateBooking();
  const { getSearchParamsFromCookies } = useSearchContext();

  const passangers = getSearchParamsFromCookies().psg;
  const arryPsg = passangers ? passangers.split(".") : [];
  const intArryPsg = arryPsg.map((str) => parseInt(str));
  const totalSeatsRequired = intArryPsg[0] + intArryPsg[1];

  const [isSaved, setIsSaved] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isValid, setIsValid] = useState({
    pemesan: false,
    penumpang: false,
    kursi: false,
  });
  const [alertSubmit, setAlertSubmit] = useState({
    status: "",
    message: ""
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
  };

  const [dataPenumpang, setDataPenumpang] = useState([]);
  const handlePenumpangDataChange = useCallback(
    (index, newData) => {
      setDataPenumpang((prevData) => {
        const updatedData = [...prevData];
        updatedData[index] = newData;
        return updatedData;
      });
    },
    [dataPenumpang]
  );

  useEffect(() => {
    if (dataPenumpang.length != 0) {
      const isAllDataValid = dataPenumpang.every((penumpang) => {
        const { familyName, ...fieldsToValidate } = penumpang;
        return Object.values(fieldsToValidate || {}).every((field) => field)
      });
      setIsValid((prevState) => ({
        ...prevState,
        penumpang: isAllDataValid,
      }));
    }
  }, [handlePenumpangDataChange])

  const mapPassengers = (inputData) => {
    const result = [];
    inputData.forEach((item) => {
      result.push({
        label: item.label,
        title: `${item.title}`,
        ageGroup: item.ageGroup,
        fullName: item.fullName || "",
        familyName: item.familyName || "",
        birthDate: item.dateOfBirth || "",
        nationality: item.nationality || "",
        identityNumber: item.identityNumber || "",
        issuingCountry: item.issuingCountry || "",
        expiryDate: item.expiryDate || ""
      });
    });
    if (intArryPsg[2] > 0) {
      for (let i = 0; i < intArryPsg[2]; i++) {
        result.push({
          ageGroup: "Baby",
        });
      }
    }
    return result;
  };

  const mapSeat = (inputData) => {
    return inputData.map((item, index) => {
      return {
        label: `P${index + 1}`,
        seatNumber: item
      };
    });
  };

  const handleSave = () => {
    if (Object.values(isValid).every((status) => status)) {
      setIsSaved(true);
    } else {
      alert("Silakan lengkapi semua data sebelum menyimpan.");
    }
  };

  const handleContinuePayment = async () => {
    try {
      const bookCode = await createBooking({
        "itinerary": {
          "journeyType": "One-way",
          "outbound": parseInt(id),
          "inbound": null
        },
        "passenger": {
          "total": intArryPsg[0] + intArryPsg[1],
          "adult": intArryPsg[0],
          "child": intArryPsg[1],
          "baby": intArryPsg[2],
          "data": mapPassengers(dataPenumpang)
        },
        "seat": {
          "outbound": mapSeat(selectedSeats),
          "inbound": null
        }
      });
      setAlertSubmit({
        status: "success",
        message: "Checkout Berhasil"
      })
      if (bookCode) {
        setTimeout(() => {
          navigate(`/payment/${bookCode}`);
        }, 2000);
      }
    }
    catch (error) {
      setAlertSubmit({
        status: "error",
        message: errorBooking
      })
    }
  }

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
              className={`w-11/12 max-w-2xl py-4 rounded-lg text-xl transition-opacity shadow-md ${isSaved || Object.values(isValid).includes(false)
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
            <>
            <div className="mt-6 mb-10 mx-auto flex justify-center">
              <button onClick={handleContinuePayment} className="w-[350px] bg-[#FF0000] text-white py-4 rounded-[12px] text-xl hover:opacity-90 transition-opacity shadow-md">
                {loadingBooking ? "Loading" : "Lanjut Bayar"}
              </button>
              
            </div>
            <div>
              {
                alertSubmit.status == "success" && <AlertCheckout type={"success"} text={alertSubmit.message} />
              }
              {
                alertSubmit.status == "error" && <AlertCheckout type={"danger"} text={alertSubmit.message} />
              }
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderBody;