import React from "react";
import NavbarAuthentication from "../components/fragments/Navbar/Navbar";
import OrderHeader from "../components/fragments/OrderSection/OrderHeader";
import OrderBody from "../components/fragments/OrderSection/OrderBody";

const OrderPage = () => {
    return (
        <>
            <NavbarAuthentication />
            <OrderHeader/>
            <OrderBody/>
            
        </>
    )
}

export default OrderPage