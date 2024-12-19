import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useResetPassword from "../../../hooks/useAuthenticate";

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const { handleResetPassword, loading, message, success } = useResetPassword();

  useEffect(() => {
    setFocus("newPassword");
  }, [setFocus]);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (token) {
      const result = await handleResetPassword(
        token,
        data.newPassword,
        data.confirmNewPassword
      );
      if (result) {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } else {
      console.error("Token tidak ditemukan.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-6 space-y-8">
          <h2 className="text-start text-3xl font-bold text-black sm:text-4xl">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 font-medium mb-2 text-[12px]"
              >
                Password Baru
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password baru"
                  className={`w-full rounded-[16px] border-[1.5px] border-gray-200 p-4 mt-2 text-sm shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[1] focus:ring-[#7126B5] ${errors.newPassword ? "border-red-500" : "border-gray-300"}`}
                  {...register("newPassword", {
                    required: "Password harus diisi",
                    minLength: {
                      value: 6,
                      message: "Password harus terdiri dari minimal 6 karakter",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-[60%] transform -translate-y-1/2 text-xl z-10"
                >
                  {showPassword ? (
                    <FiEyeOff style={{ color: "#8A8A8A" }} />
                  ) : (
                    <FiEye style={{ color: "#8A8A8A" }} />
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmNewPassword"
                className="block text-gray-700 font-medium mb-2 text-[12px]"
              >
                konfirmasi password
              </label>
              <div className="relative">
                <input
                  id="confirmNewPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password baru"
                  className={`w-full rounded-[16px] border-[1.5px] border-gray-200 p-4 mt-2 text-sm shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[1] focus:ring-[#7126B5] ${errors.confirmNewPassword ? "border-red-500" : "border-gray-300"}`}
                  {...register("confirmNewPassword", {
                    required: "Password harus diisi",
                    minLength: {
                      value: 6,
                      message: "Password harus terdiri dari minimal 6 karakter",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-[60%] transform -translate-y-1/2 text-xl z-10"
                >
                  {showPassword ? (
                    <FiEyeOff style={{ color: "#8A8A8A" }} />
                  ) : (
                    <FiEye style={{ color: "#8A8A8A" }} />
                  )}
                </button>
              </div>
              {errors.confirmNewPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.confirmNewPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`bg-purple-700 w-full text-white py-3 rounded-[16px] font-semibold hover:bg-[#4B1979] transition ${loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"}`}
              disabled={loading}
            >
              {loading ? "Mengatur ulang..." : "Reset Password"}
            </button>
          </form>

          {message && (
            <div className="mt-4 flex justify-center">
              <div
                className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${success ? "bg-green-500" : "bg-red-500"}`}
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

export default ResetPasswordForm;
