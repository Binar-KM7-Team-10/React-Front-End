// routesConfig.js
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import OrderPage from "../pages/OrderPage";
import Payment from "../pages/Payment";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentSuccess from "../pages/PaymentSuccess";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import HistoryOrder from "../pages/HistoryOrder";
import NotificationPage from "../pages/NotificationPage";
import ProfilePage from "../pages/ProfilePage";
import ResetPassword from "../pages/ResetPassword";
import OtpPage from "../pages/OtpPage";
import PrintTicketPage from "../pages/PrintTicket";
import ForgotPasswordPage from "../pages/ForgotPassword";

const routesConfig = [

  { path: "/", element: HomePage, type: "public" },
  { path: "/search", element: SearchPage, type: "public" },

  { path: "/login", element: Login, type: "guest" },
  { path: "/register", element: Register, type: "guest" },
  { path: "/otp-confirm", element: OtpPage, type: "guest" },
  { path: "/reset-password", element: ResetPassword, type: "guest" },
  { path: "/forgot-password", element: ForgotPasswordPage, type: "guest" },

  { path: "/checkout/:id", element: OrderPage, type: "auth" },
  { path: "/payment/:bookCode", element: Payment, type: "auth" },
  { path: "/payment-success/:bookCode", element: PaymentSuccess, type: "auth" },
  { path: "/print-ticket/:bookCode", element: PrintTicketPage, type: "auth" },

  { path: "/history-order", element: HistoryOrder, type: "auth" },
  { path: "/notification", element: NotificationPage, type: "auth" },
  { path: "/profile", element: ProfilePage, type: "auth" },
  
  { path: "*", element: NotFoundPage, type: null },
];

export default routesConfig;
