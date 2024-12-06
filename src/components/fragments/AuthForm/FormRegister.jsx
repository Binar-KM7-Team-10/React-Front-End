import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputForm from "../../elements/Input/InputForm";
import ButtonRegister from "../../elements/Button/ButtonRegister";
// import Loading from "../Loading/Loading";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
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

  const handleRegister = async (data) => {
    console.log("Form submitted with data:", data);
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center px-1 py-6">
      <div className="w-full bg-white p-4 rounded-lg">
        {/* <Loading />{" "} */}
        <form onSubmit={handleSubmit(handleRegister)}>
          <InputForm
            label="Nama"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Nama Lengkap"
            {...registerForm("firstName", {
              required: "First name is required",
            })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mb-4">
              {errors.firstName.message}
            </p>
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
                value: /^[0-9]+$/,
                message: "Phone number must contain only numbers",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mb-4">{errors.phone.message}</p>
          )}
          <div className="relative">
            <InputForm
              label="Buat Password"
              type= {showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Buat Password"
              {...registerForm("password", {
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
            className="absolute right-4 top-[65%] transform -translate-y-1/2 text-xl z-10"
          >
            {showPassword ? (
              <FiEyeOff style={{ color: "#8A8A8A" }} />
            ) : (
              <FiEye style={{ color: "#8A8A8A" }} />
            )}
          </button>
          </div>
          <ButtonRegister />
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
