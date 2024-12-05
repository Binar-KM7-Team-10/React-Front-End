import React, { useState } from 'react';
import Navbar from '../components/fragments/Navbar/Navbar';
import { FiArrowLeft } from "react-icons/fi";
import ButtonOtp from '../components/elements/Button/ButtonOtp';
import AlertAuth from '../components/elements/Alert/AlertAuth';

const OtpPage = () => {

    const [otp, setOtp] = useState(Array(6).fill(""));

    const handleChange = (value, index) => {
        if (!/^\d*$/.test(value)) return; // Hanya menerima angka
        const updatedOtp = [...otp];
        updatedOtp[index] = value;

        setOtp(updatedOtp);
        onChange(updatedOtp.join(""));

        // Pindah ke kotak berikutnya jika angka dimasukkan
        if (value && index < length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar search={false} />
            <div className="flex justify-center w-full">
                <div className="flex w-3/4 lg:w-7/12 flex-col justify-center p-4 lg:p-8 mt-5">
                    <FiArrowLeft size={20} />
                    <div className="flex flex-col w-10/12 justify-center my-7 mx-auto">
                        <h3 className='text-2xl font-bold'>Masukkan OTP</h3>
                        <p className='text-sm text-center mt-10'>Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com</p>
                        <div className='flex justify-center gap-3 mt-10'>
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
                                    className='border rounded-xl text-center text-xl'
                                />
                            ))}
                        </div>
                        <p className='text-sm text-center mt-5 mb-32'>Kirim Ulang OTP dalam 60 detik</p>
                        <ButtonOtp />
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center mt-24">
                <AlertAuth msg={"Registrasi berhasil"} type={"success"}/>
            </div>
        </div>
    )
}

export default OtpPage