import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import useAuthenticate from "../../../hooks/useAuthenticate";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();
  const { loading, success, message, handleForgotPassword } = useAuthenticate();
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (data) => {
    const { email } = data;
    await handleForgotPassword(email);
  };

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false); // Hide the message after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [message]);

  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center md:items-center bg-white mt-16 md:-mt-10">
        <div className="w-full max-w-md p-6 space-y-8">
          <div>
            <FiArrowLeft
              size={20}
              className="cursor-pointer text-gray-600"
              onClick={() => navigate("/login")}
            />
          </div>
          <h2 className="text-start text-2xl font-bold text-black sm:text-4xl">
            Lupa Password
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 text-[12px]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Contoh: johndoe@gmail.com"
                className={`w-full rounded-[16px] border-[1.5px] border-gray-200 p-4 mt-2 pe-12 text-sm shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[1] focus:ring-[#7126B5] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email harus diisi",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Format email tidak valid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`bg-purple-700 w-full text-white py-3 rounded-[16px] font-semibold hover:bg-[#4B1979] transition ${loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"}`}
              disabled={loading}
            >
              {loading ? "Mengirim..." : "Kirim Tautan Reset"}
            </button>
          </form>
          {showMessage && message && (
            <div className="mt-4 flex justify-center">
              <div
                className={`inline-block px-4 py-2 text-white font-semibold rounded-lg text-center ${
                  success ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
