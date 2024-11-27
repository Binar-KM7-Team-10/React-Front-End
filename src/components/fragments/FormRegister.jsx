import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../Input/InputForm";
import ButtonRegister from "../Button/ButtonRegister";
// import Loading from "../Loading/Loading";

const FormRegister = () => {
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

  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full sm:w-full bg-white p-4 rounded-lg">
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
            placeholder="Contoh: johndee@gmail.com"
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
          <InputForm
            label="Buat Password"
            type="password"
            id="password"
            name="password"
            placeholder="Buat Password"
            {...registerForm("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">
              {errors.password.message}
            </p>
          )}
          <ButtonRegister />
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
