import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../Input/InputForm";
import Button from "../Button/Button";
import ButtonLogin from "../Button/ButtonLogin";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, setFocus } = useForm();
  const inputRef = useRef(null);

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const handleLogin = async (data) => {
    const { email, password } = data;
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login berhasil:", email);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full sm:w-full bg-white p-4 rounded-lg">
        {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="spinner-border text-blue-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(handleLogin)}>
          <InputForm
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Contoh: johndoe@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
          )}

          <div className="flex items-center justify-between">
            <div className="w-full">
              <InputForm
                label="Password"
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan Password"
                {...register("password", {
                    required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>
              )}
                <Link className="text-sm text-[#7126B5] font-medium">
                  Lupa Kata Sandi?
                </Link>
            </div>
          </div>

          <ButtonLogin />

        </form>
      </div>
    </div>
  );
};

export default FormLogin;
