import React from "react";

const AlertCheckout = ({text, type}) => {

    let typeAlert = {
        "success": "bg-green-500",
        "danger": "bg-red-500"
    }

    return (
        <div className={`${typeAlert[type]} p-5 w-full rounded-md`}>
            <p className="text-white text-center">{text}</p>
        </div>
    )
}

export default AlertCheckout