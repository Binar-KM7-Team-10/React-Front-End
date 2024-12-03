import React from "react";

const AlertCheckout = ({text, type}) => {

    let typeAlert = {
        "success": "bg-green-500",
        "danger": "bg-[#FF0000]"
    }

    return (
        <div className={`${typeAlert[type]} p-5 w-full rounded-[12px]`}>
            <p className="text-white text-center text-[16px]">{text}</p>
        </div>
    )
}

export default AlertCheckout