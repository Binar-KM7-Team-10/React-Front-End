// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import useAuthenticate from "../../../hooks/useAuthenticate";

// const FormResetPassword = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const { register, handleSubmit, formState: { errors }, setFocus } = useForm();
//   const { loading, success, error, handleResetPassword } = useAuthenticate(); 

//   useEffect(() => {
//     setFocus("email");
//   }, [setFocus]);

//   const onSubmit = async (data) => {
//     const { email } = data;

//     await handleResetPassword(email);

//     if (success) {
//       setSuccessMessage("Tautan reset password telah dikirim ke email Anda.");
//     } else if (error) {
//       setSuccessMessage(`Error: ${error}`);
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="flex-1 flex justify-center items-center bg-white">
//         <div className="w-full max-w-md p-6 space-y-8">
//           <h2 className="text-start px-4 md:px-0 text-3xl font-bold text-black sm:text-4xl">
//             Masuk
//           </h2>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-medium mb-2 text-[12px]"
//               >
//                 Email/No Telepon
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Contoh: johndoe@gmail.com"
//                 className={`w-full rounded-[16px] border-[1.5px] border-gray-200 p-4 mt-2 pe-12 text-sm shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[1] focus:ring-[#7126B5] ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 }`}
//                 {...register("email", {
//                   required: "Email harus diisi",
//                   pattern: {
//                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                     message: "Format email tidak valid",
//                   },
//                 })}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-2">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className={`bg-purple-700 w-full text-white py-3 rounded-[16px] font-semibold hover:bg-[#4B1979] transition ${loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"}`}
//               disabled={loading}
//             >
//               {loading ? "Mengirim..." : "Masuk"}
//             </button>
//           </form>

//           {successMessage && (
//             <div className="mt-4 flex justify-center">
//               <div
//                 className="inline-block px-4 py-2 text-white font-semibold rounded-lg"
//                 style={{
//                   border: "2px solid #73CA5C",
//                   backgroundColor: "#73CA5C",
//                 }}
//               >
//                 {successMessage}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormResetPassword;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthenticate from '../../../hooks/useAuthenticate';

const ForgotPasswordForm = () => {
  const { register, handleSubmit, formState: { errors }, setFocus } = useForm();
  const { loading, success, message, handleForgotPassword } = useAuthenticate();

  const onSubmit = async (data) => {
    const { email } = data;
    await handleForgotPassword(email);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-6 space-y-8">
          <h2 className="text-start px-4 md:px-0 text-3xl font-bold text-black sm:text-4xl">
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
                  errors.email ? 'border-red-500' : 'border-gray-300'
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
              className={`bg-purple-700 w-full text-white py-3 rounded-[16px] font-semibold hover:bg-[#4B1979] transition ${loading ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'}`}
              disabled={loading}
            >
              {loading ? "Mengirim..." : "Kirim Tautan Reset"}
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

export default ForgotPasswordForm;
