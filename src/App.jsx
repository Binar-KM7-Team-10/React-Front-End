import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import OrderPage from "./pages/OrderPage";
import Payment from "./pages/Payment";
import NotFoundPage from "./pages/NotFoundPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import HistoryOrder from "./pages/HistoryOrder";
import NotificationPage from "./pages/NotificationPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPassword from "./pages/ResetPassword";
import OtpPage from "./pages/OtpPage";
import ProtectedRoute from "./util/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute type="public">
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-confirm" element={<OtpPage />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute type="guest">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<OrderPage />} />
        <Route
          path="/search"
          element={
            <ProtectedRoute type="auth">
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/history-order" element={<HistoryOrder />} />
        <Route path="/notifikasi" element={<NotificationPage />} />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute type="auth">
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
