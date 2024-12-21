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

const routesConfig = [
  { path: "/", element: HomePage, type: "public" },
  { path: "/reset-password", element: ResetPassword, type: "guest" },
  { path: "/otp-confirm", element: OtpPage, type: "guest" },
  { path: "/login", element: Login, type: "guest" },
  { path: "/register", element: Register, type: "guest" },
  { path: "/payment/:bookCode", element: Payment, type: "auth" },
  { path: "/checkout/:id", element: OrderPage, type: "auth" },
  { path: "/print-ticket/:bookCode", element: PrintTicketPage, type: "public" },
  { path: "/search", element: SearchPage, type: "public" },
  { path: "/payment-success/:bookCode", element: PaymentSuccess, type: "auth" },
  { path: "/history-order", element: HistoryOrder, type: "auth" },
  { path: "/notification", element: NotificationPage, type: "auth" },
  { path: "/profile/:id", element: ProfilePage, type: "auth" },
  { path: "*", element: NotFoundPage, type: null },
];

export default routesConfig;
