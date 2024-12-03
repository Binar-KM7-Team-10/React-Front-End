import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const handleResetPassword = async (data) => {
    const { email } = data;
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Link reset password telah dikirim ke:", email);

      setSuccess(true);
    } catch (error) {
      console.error("Error mengirim link reset password:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="w-full max-w-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Masuk</h2>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email/No Telepon
              </label>
              <input
                id="email"
                type="email"
                placeholder="Contoh: johndoe@gmail.com"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
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
              className="mt-4 text-purple-600 text-sm font-semibold"
              onClick={() =>
                alert("Fitur lupa kata sandi sedang dikembangkan.")
              }
            >
              Lupa Kata Sandi
            </button>

            <button
              type="submit"
              className={`w-full py-2 text-white font-semibold rounded-lg ${
                loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
              }`}
              disabled={loading}
            >
              {loading ? "Mengirim..." : "Masuk"}
            </button>
          </form>

          {success && (
            <div className="mt-20 flex justify-center">
              <div
                className="inline-block px-4 py-2 text-white font-semibold rounded-lg"
                style={{
                  border: "2px solid #73CA5C",
                  backgroundColor: "#73CA5C",
                }}
              >
                Tautan reset password terkirim
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormResetPassword;
