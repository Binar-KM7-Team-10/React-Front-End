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
import ForgotPassword from "./pages/ForgotPassword";
import OtpPage from "./pages/OtpPage";
import ProtectedRoute from "./util/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword";  
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute type="public">
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/forgot-password" element={
          <ProtectedRoute type="guest">
            <ForgotPassword />
          </ProtectedRoute>
        } />
        <Route path="/otp-confirm" element={
          <ProtectedRoute type="guest">
            <OtpPage />
          </ProtectedRoute>
        } />
        <Route path="/login" element={
          <ProtectedRoute type="guest">
            <Login />
          </ProtectedRoute>
        } />
        <Route path="/register" element={
          <ProtectedRoute type="guest">
            <Register />
          </ProtectedRoute>
        } />
        <Route path="/payment" element={
          <ProtectedRoute type="auth">
            <Payment />
          </ProtectedRoute>
        } />
        <Route path="/checkout" element={
          <ProtectedRoute type="auth">
            <OrderPage />
          </ProtectedRoute>
        } />
        <Route path="/search" element={
          <ProtectedRoute type="auth">
            <SearchPage />
          </ProtectedRoute>
        } />
        <Route path="/payment-success" element={
          <ProtectedRoute type="auth">
            <PaymentSuccess />
          </ProtectedRoute>
        } />
        <Route path="/history-order" element={
          <ProtectedRoute type="auth">
            <HistoryOrder />
          </ProtectedRoute>
        } />
        <Route path="/notifikasi" element={
          <ProtectedRoute type="auth">
            <NotificationPage />
          </ProtectedRoute>
        } />
        <Route path="/profile/:id" element={
          <ProtectedRoute type="auth">
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path="/reset-password" element={
          <ProtectedRoute type="guest">
            <ResetPassword />
          </ProtectedRoute>
        } />
        <Route path="*" element={<
          NotFoundPage />
        } />
      </Routes>
    </Router>
  );
}

export default App;
