import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputForm from "../../elements/Input/InputForm";
import ButtonRegister from "../../elements/Button/ButtonRegister";
import useRegister from "../../../hooks/useRegister";
import AlertAuth from "../../elements/Alert/AlertAuth";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, setOtp, loading } = useRegister();
  const [result, setResult] = useState({})
  const navigate = useNavigate();

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
  } = useForm();

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const maskEmail = (email) => {
    const [username, domain] = email.split("@");
    const maskedUsername = username[0] + "*".repeat(username.length - 1);
    return maskedUsername + "@" + domain;
  };

  const handleRegister = async (data) => {
    const { fullName, email, phone, password } = data;
    const resultRegister = await register(email, password, fullName, phone);
    if (resultRegister.length != 0) {
      setResult(resultRegister)
    }
    reset();
    setOtp(email, maskEmail(email))
    if (resultRegister.status == "success") {
      setTimeout(() => {
        navigate("/otp-confirm")
      }, 3000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center px-1 py-6">
      <div className="w-full bg-white p-4 rounded-lg">
        {/* {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="spinner-border text-blue-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )} */}

        <form onSubmit={handleSubmit(handleRegister)}>
          <InputForm
            label="Nama"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Nama Lengkap"
            {...registerForm("fullName", {
              required: "First name is required",
            })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mb-4">{errors.fullName.message}</p>
          )}

          <InputForm
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="johndee@gmail.com"
            {...registerForm("email", {
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

          <InputForm
            label="Nomor Telepon"
            type="text"
            id="phone"
            name="phone"
            placeholder="+62.."
            {...registerForm("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^628[0-9]+$/,
                message: "Phone number must start with '628' and contain only numbers",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mb-4">{errors.phone.message}</p>
          )}

          <div className="relative">
            <InputForm
              label="Buat Password"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Buat Password"
              {...registerForm("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>
            )}

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-[65%] transform -translate-y-1/2 text-xl z-10"
            >
              {showPassword ? (
                <FiEyeOff style={{ color: "#8A8A8A" }} />
              ) : (
                <FiEye style={{ color: "#8A8A8A" }} />
              )}
            </button>
          </div>
          <ButtonRegister msg={loading ? "Loading" : "Daftar"} disabled={loading} />
          {result.status == "success" && <AlertAuth msg={result.message} type={"success"} />}
          {result.status == "error" && <AlertAuth msg={result.message} type={"danger"} />}
        </form>
      </div>
    </div>
  );
};

export default FormRegister;