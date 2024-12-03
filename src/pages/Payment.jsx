// import React from "react";
// import NavbarAuthentication from "../components/fragments/NavbarAuthentication";
// import PaymentHeader from "../components/fragments/PaymentHeader";
// import OrderForm from "../components/fragments/OrderForm";
import React from 'react'
import OrderForm from '../components/fragments/OrderSection/OrderForm'
import NavbarAuthentication from '../components/fragments/Navbar/Navbar'
import OrderHeader from '../components/fragments/OrderSection/OrderHeader'

const Payment = () => {
  const active = {
    text1: true,
    text2: true,
    text3: false,
  };

  return (
    <div>
      <NavbarAuthentication />
      <PaymentHeader inputText="oi" alertType="danger" activeStep={active} />
      <OrderForm />
        <NavbarAuthentication/>
        <OrderHeader/>
        <OrderForm/>
    </div>
  );
};

export default Payment;
