import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputForm from "../../elements/Input/InputForm";
import ButtonLogin from "../../elements/Button/ButtonLogin";
import useLogin from "../../../hooks/useLogin";
import AlertAuth from "../../elements/Alert/AlertAuth";

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, success, error } = useLogin();
  console.log(success, error)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const handleLogin = async (data) => {
    const { email, password } = data;
    const result = await login(email, password)
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center px-1 py-6">
      <div className="w-full bg-white p-4 rounded-lg">
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

          <div className="relative">
            <InputForm
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Masukkan Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-4">
                {errors.password.message}
              </p>
            )}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-[43%] transform -translate-y-1/2 text-xl z-10"
            >
              {showPassword ? (
                <FiEyeOff style={{ color: "#8A8A8A" }} />
              ) : (
                <FiEye style={{ color: "#8A8A8A" }} />
              )}
            </button>

            <a href="#" className="text-[12px] text-[#7126B5] font-medium">
              Lupa Kata Sandi?
            </a>
          </div>
          {loading && <ButtonLogin msg={"Loading"} />}
          {!loading && <ButtonLogin msg={"Masuk"} />}
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          Belum Punya Akun?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#7126B5]"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
      <div className="flex w-full justify-center mt-24">
        {success.status && <AlertAuth msg={success.message} type={"success"} />}
        {error.status && <AlertAuth msg={error.message} type={"danger"} />}
      </div>
    </div>
  );
};

export default FormLogin;
