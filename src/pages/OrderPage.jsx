import React from "react";
import NavbarAuthentication from "../components/fragments/NavbarAuthentication";
import OrderHeader from "../components/fragments/OrderHeader";
import OrderBody from "../components/fragments/OrderBody";

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