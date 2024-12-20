import { axiosInstance } from "../api/axiosInstance";

const Login = async (body) => {
  try {
    const response = await axiosInstance.post("/login", {
      email: body.email,
      password: body.password,
    });
    if (response.data.status == "Success") {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } else {
      return {
        success: false,
        data: response.data,
        message: response.message || "Failed to login",
      };
    }
  } catch (err) {
    return {
      success: false,
      data: err.response.data,
      message: err.response.data.message || "An error occurred",
    };
  }
};

const Register = async (body) => {

  try {
    const response = await axiosInstance.post("/register", {
      email: body.email,
      password: body.password,
      fullName: body.fullName,
      phoneNumber: body.phone,
    });
    if (response.data.status == "Success") {
      console.log("ok")
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
  }
  catch (err) {
    return {
      success: false,
      data: err.response.data || null,
      message:
        err.response?.data?.message || err.message || "An error occurred",
    };
  }
};

const RegisterOtp = async (body) => {
  try {
    console.log(body)
    const response = await axiosInstance.post("/register/otp",  {
      "email": body.email,
      "otp": body.otp
    });
    if (response.data.status == "Success") {
      console.log("ok")
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
  }
  catch (err) {
    return {
      success: false,
      data: err.response.data || null,
      message:
        err.response?.data?.message || err.message || "An error occurred",
    };
  }
};

const RegisterOtpResend = async (email) => {
  try {
    console.log(email)
    const response = await axiosInstance.post("/register/otp/resend", {
      "email": email,
    });
    if (response.data.status == "Success") {
      console.log("ok")
      return {
        success: true,
        data: response.data?.data || null,
        message: response.data?.message || "Otp sucessfully resend",
      };
    }
    return {
      success: false,
      data: response.data || null,
      message: response.data?.message || "Failed to register",
    };
  }
  catch (err) {
    return {
      success: false,
      data: err.response.data || null,
      message:
        err.response?.data?.message || err.message || "An error occurred",
    };
  }
};

const Logout = async () => {
  try {
    const response = await axiosInstance.get("/logout");
    if (response.data.status == "Success") {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } else {
      return {
        success: false,
        data: response.data,
        message: response.message || "Failed to logout",
      };
    }
  } catch (err) { }
};

const ForgotPass = async (email) => {
  try {
    const response = await axiosInstance.post('/forgot-password', { email });

    if (response.data.status === 'Success') {
      return {
        success: true,
        message: response.data.message,
      };
    } else {
      return {
        success: false,
        message: response.data.message || 'Failed to send email',
      };
    }
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || 'An error occurred',
    };
  }
};

const ResetPass = async (token, newPassword, confirmNewPassword) => {
  try {
    const response = await axiosInstance.post('/reset-password', {
      passwordResetToken: token,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword,
    });

    if (response.data.status === 'Success') {
      return {
        success: true,
        message: response.data.message,
      };
    } else {
      return {
        success: false,
        message: response.data.message || 'Failed to reset password',
      };
    }
  } catch (err) {
    console.error("Error during password reset:", err); 
    return {
      success: false,
      message: err.response?.data?.message || 'An error occurred',
    };
  }
};


const CheckAuth = async () => { };

export {
  Login,
  Register,
  RegisterOtp,
  RegisterOtpResend,
  Logout,
  ForgotPass,
  ResetPass,
  CheckAuth,
};
