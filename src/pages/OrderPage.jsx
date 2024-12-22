import React, { useState } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import OrderHeader from "../components/fragments/OrderSection/OrderHeader";
import OrderBody from "../components/fragments/OrderSection/OrderBody";

const OrderPage = () => {

    const [isAvailable, setisAvailable] = useState(true);

    return (
        <>
            <Navbar search={true} type={"auth"} />
            <OrderHeader setisAvailable={setisAvailable} />
            {
                isAvailable && <OrderBody />
            }
        </>
    )
}

export default OrderPage