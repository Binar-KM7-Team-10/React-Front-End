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
        message: response.message || "Gagal untuk login",
      };
    }
  } catch (err) {
    return {
      success: false,
      data: err.response.data,
      message: err.response.data.message || "Terjadi kesalahan, silahkan coba lagi",
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
        message: response.data?.message || "Registration berhasil",
      };
    }
    return {
      success: false,
      data: response.data || null,
      message: response.data?.message || "Gagal registrasi!",
    };
  }
  catch (err) {
    return {
      success: false,
      data: err.response.data || null,
      message:
        err.response?.data?.message || err.message || "Terjadi kesalahan, silahkan coba lagi",
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
        message: response.data?.message || "Otp Berhasil dikirim ",
      };
    }
    return {
      success: false,
      data: response.data || null,
      message: response.data?.message || "Gagal mengirim otp",
    };
  }
  catch (err) {
    return {
      success: false,
      data: err.response.data || null,
      message:
        err.response?.data?.message || err.message || "Terjadi kesalahan, silahkan coba lagi",
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
        message: response.data?.message || "Otp berhasil dikirim ulang",
      };
    }
    return {
      success: false,
      data: response.data || null,
      message: response.data?.message || "Gagal mengirim otp kembali",
    };
  }
  catch (err) {
    return {
      success: false,
      data: err.response.data || null,
      message:
        err.response?.data?.message || err.message || "Terjadi kesalahan, silahkan coba lagi",
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
        message: response.message || "Gagal untuk logout",
      };
    }
  } catch (err) { 
    return {
      success: false,
      data: err.response.data || null,
      message:
        err.response?.data?.message || err.message || "Terjadi kesalahan, silahkan coba lagi",
    };
  }
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
        message: response.data.message || 'Gagal mengirim email',
      };
    }
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || 'Terjadi kesalahan, silahkan coba lagi',
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
        message: response.data.message || 'Gagal mengubah password',
      };
    }
  } catch (err) {
    console.error("Error during password reset:", err); 
    return {
      success: false,
      message: err.response?.data?.message || 'Terjadi kesalahan, silahkan coba lagi',
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
