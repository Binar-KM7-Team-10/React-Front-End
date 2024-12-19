import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/fragments/Navbar/Navbar";
import { FiArrowLeft } from "react-icons/fi";
import AlertAuth from "../components/elements/Alert/AlertAuth";
import useRegisterOtp from "../hooks/useRegisterOtp";
import { RegisterOtpResend } from "../services/auth.service";

const OtpPage = () => {
  const [otp, setOtp] = useState(Array(6).fill("")); // Array untuk tiap karakter OTP
  const [otpString, setOtpString] = useState(""); // String gabungan OTP
  const { registerOtp, emailInput, loading } = useRegisterOtp();
  const [result, setResult] = useState({});

  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Hanya menerima angka
    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);

    // Gabungkan OTP menjadi satu string
    const joinedOtp = updatedOtp.join("");
    setOtpString(joinedOtp);

    console.log("OTP Array:", updatedOtp);
    console.log("OTP String:", joinedOtp);
    console.log(emailInput[0]);

    // Pindah ke kotak berikutnya jika angka dimasukkan
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleOtp = async () => {
    const resultRegisterotp = await registerOtp(emailInput[0], otpString);
    setResult(resultRegisterotp);
  };

  const handleOtpResend = async () => {
    setTimeLeft(60);
    const resultOtpResend = await RegisterOtpResend(emailInput[0]);
    setResult(resultOtpResend);
  };

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen">
      <Navbar search={false} />
      <div className="flex justify-center w-full">
        <div className="flex w-3/4 lg:w-7/12 flex-col justify-center p-4 lg:p-8 mt-5">
          <div>
            <FiArrowLeft
              size={20}
              className="cursor-pointer text-gray-600"
              onClick={() => navigate("/login")}
            />
          </div>
          <div className="flex flex-col w-10/12 justify-center my-7 mx-auto">
            <h3 className="text-2xl font-bold">Masukkan OTP</h3>
            <p className="text-sm text-center mt-10">
              Ketik 6 digit kode yang dikirimkan ke {emailInput[1]}
            </p>
            <div className="flex justify-center gap-3 mt-10">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  style={{
                    width: "42px",
                    height: "42px",
                  }}
                  className="border rounded-xl text-center text-xl"
                />
              ))}
            </div>
            <p className="text-sm text-center mt-5 mb-32">
              Kirim Ulang OTP dalam {formatTime(timeLeft)} detik
            </p>
            <div className="mt-2">
              {timeLeft == 0 ? (
                <button
                  className="bg-purple-700 w-full text-white py-5 rounded-[16px] font-semibold hover:bg-[#4B1979] transition"
                  onClick={handleOtpResend}
                >
                  Kirim Ulang Otp
                </button>
              ) : (
                <button
                  className="bg-purple-700 w-full text-white py-5 rounded-[16px] font-semibold hover:bg-[#4B1979] transition"
                  onClick={handleOtp}
                >
                  Simpan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-24">
        {result.status == "success" && (
          <AlertAuth msg={result.message} type={"success"} />
        )}
        {result.status == "error" && (
          <AlertAuth msg={result.message} type={"danger"} />
        )}
      </div>
    </div>
  );
};
export default OtpPage;
