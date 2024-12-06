import React from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import OrderHeader from "../components/fragments/OrderSection/OrderHeader";
import OrderBody from "../components/fragments/OrderSection/OrderBody";

const OrderPage = () => {
    return (
        <>
            <Navbar search={true} type={"auth"} />
            <OrderHeader/>
            <OrderBody/>
            
        </>
    )
}

export default OrderPage