// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import InputForm from "../../elements/Input/InputForm";
// import { FiEye, FiEyeOff } from "react-icons/fi";

// import DynamicBanner from "../Banner/DynamicBanner";
// import FlightResetPasswordBanner from "../../../assets/Images/Flight-Banner.png";

// const FormNewResetPassword = () => {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setFocus,
//   } = useForm();

//   useEffect(() => {
//     setFocus("email");
//   }, [setFocus]);

//   const togglePasswordVisibility = (type) => {
//     if (type === "password") {
//       setShowPassword(!showPassword);
//     } else if (type === "confirmPassword") {
//       setShowConfirmPassword(!showConfirmPassword);
//     }
//   };

//   const handleResetPassword = async (data) => {
//     const { email } = data;
//     setLoading(true);

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       console.log("Link reset password telah dikirim ke:", email);

//       setSuccess(true);
//     } catch (error) {
//       console.error("Error mengirim link reset password:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex h-screen flex-row lg:flex-row">
//       <DynamicBanner imageSrc={FlightResetPasswordBanner} />
//       <div className="flex-1 flex justify-center items-center bg-white">
//         <div className="w-full max-w-md p-6 space-y-8">
//           <h2 className="text-start px-4 md:px-0 text-3xl font-bold text-black sm:text-4xl">
//             Reset Password
//           </h2>
//           <form onSubmit={handleSubmit(handleResetPassword)}>
//             <div className="relative">
//               <InputForm
//                 label="Masukan Password Baru"
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 placeholder="Masukkan Password"
//                 {...register("password", {
//                   required: "Password is required",
//                 })}
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-sm mb-4">
//                   {errors.password.message}
//                 </p>
//               )}
//               <button
//                 type="button"
//                 onClick={() => togglePasswordVisibility("password")}
//                 className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl z-10"
//               >
//                 {showPassword ? (
//                   <FiEyeOff style={{ color: "#8A8A8A" }} />
//                 ) : (
//                   <FiEye style={{ color: "#8A8A8A" }} />
//                 )}
//               </button>
//             </div>

//             <div className="relative">
//               <InputForm
//                 label="Ulangi Password Baru"
//                 type={showConfirmPassword ? "text" : "password"}
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Masukkan Password"
//                 {...register("confirmPassword", {
//                   required: "Confirm Password is required",
//                 })}
//               />
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-sm mb-4">
//                   {errors.confirmPassword.message}
//                 </p>
//               )}
//               <button
//                 type="button"
//                 onClick={() => togglePasswordVisibility("confirmPassword")}
//                 className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl z-10"
//               >
//                 {showConfirmPassword ? (
//                   <FiEyeOff style={{ color: "#8A8A8A" }} />
//                 ) : (
//                   <FiEye style={{ color: "#8A8A8A" }} />
//                 )}
//               </button>
//             </div>
//             <button
//               type="submit"
//               className={`bg-purple-700 w-full text-white py-3 rounded-[16px] font-semibold hover:bg-[#4B1979] transition ${
//                 loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
//               }`}
//               disabled={loading}
//             >
//               {loading ? "Mengirim..." : "Masuk"}
//             </button>
//           </form>

//           {success && (
//             <div className="mt-20 flex justify-center">
//               <div
//                 className="inline-block px-4 py-2 text-white font-semibold rounded-lg"
//                 style={{
//                   border: "2px solid #73CA5C",
//                   backgroundColor: "#73CA5C",
//                 }}
//               >
//                 Tautan reset password terkirim
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormNewResetPassword;


import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import useAuthenticate from '../../../hooks/useAuthenticate';

const ResetPasswordForm = () => {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors }, setFocus } = useForm();
  const { loading, success, handleResetPassword } = useAuthenticate();
  
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    setFocus('newPassword');
  }, [setFocus]);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.patch('/api/reset-password', {
        token,
        newPassword: data.newPassword,
      });

      setMessage(response.data.message); 
    } catch (error) {
      setMessage(error.response?.data?.message || 'Terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-6 space-y-8">
          <h2 className="text-start px-4 md:px-0 text-3xl font-bold text-black sm:text-4xl">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 font-medium mb-2 text-[12px]"
              >
                Password Baru
              </label>
              <input
                id="newPassword"
                type="password"
                placeholder="Masukkan password baru"
                className={`w-full rounded-[16px] border-[1.5px] border-gray-200 p-4 mt-2 text-sm shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[1] focus:ring-[#7126B5] ${
                  errors.newPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register("newPassword", {
                  required: "Password harus diisi",
                  minLength: {
                    value: 6,
                    message: "Password harus terdiri dari minimal 6 karakter",
                  },
                })}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`bg-purple-700 w-full text-white py-3 rounded-[16px] font-semibold hover:bg-[#4B1979] transition ${loading ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'}`}
              disabled={loading}
            >
              {loading ? "Mengatur ulang..." : "Reset Password"}
            </button>
          </form>

          {message && (
            <div className="mt-4 flex justify-center">
              <div
                className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${
                  success ? 'bg-green-500' : 'bg-red-500'
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

export default ResetPasswordForm;
