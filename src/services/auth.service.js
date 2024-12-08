import { axiosInstance } from "../api/axiosInstance";

const Login = async (body) => {
    try {
        const response = await axiosInstance.post("/login", {
            "email": body.email,
            "password": body.password
        })
        console.log(response)
        if (response.data.status == "Success") {
            return {
                success: true,
                data: response.data.data,
                message: response.data.message
            }
        }
        else {
            return {
                success: false,
                data: response.data,
                message: response.message || "Failed to login",
            };
        }
    }
    catch (err) {
        return {
            success: false,
            data: err.response.data,
            message: err.response.data.message || "An error occurred",
        };
    }
}

const Register = async (body) => {
    try {
      const response = await axiosInstance.post("/register", {
       "email" : body.email,
        "password" : body.password,
        "name": body.name,
        "phone": body.phone,
      });
  
      if (response.status == "success") {
        return {
          success: true,
          data: response.data?.data || null,
          message: response.data?.message || "Registration successful",
        };
      }
  
      return {
        success: false,
        data: response.data || null,
        message: response.data?.message || "Failed to register",
      };
    } catch (err) {
      return {
        success: false,
        data: err.response.data || null,
        message: err.response.data.message || err.message || "An error occurred",
      };
    }
  };
  

const RegisterOtp = async () => {

}

const Logout = async () => {

}

const ForgotPass = async () => {

}

const ResetPass = async () => {

}

const CheckAuth = async () => {

}

export {
    Login,
    Register,
    RegisterOtp,
    Logout,
    ForgotPass,
    ResetPass,
    CheckAuth
}

