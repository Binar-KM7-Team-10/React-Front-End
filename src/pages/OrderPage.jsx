import React, { useState } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import OrderHeader from "../components/fragments/OrderSection/OrderHeader";
import OrderBody from "../components/fragments/OrderSection/OrderBody";
import Loading from "../components/elements/Loading/Loading"; 

const OrderPage = () => {

    const [isAvailable, setisAvailable] = useState(false); 

    React.useEffect(() => {
        setTimeout(() => {
            setisAvailable(true); 
        }, 500); 
    }, []);

    return (
        <>
            <Navbar search={true} type={"auth"} />
            <OrderHeader setisAvailable={setisAvailable} />
            {isAvailable ? <OrderBody /> : <Loading />}
        </>
    );
}

export default OrderPage;
