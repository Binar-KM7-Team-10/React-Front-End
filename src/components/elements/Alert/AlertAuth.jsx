import React from 'react';

const AlertAuth = ({msg, type}) => {
    let typeAlert = {
        "success": "bg-green-500",
        "danger": "bg-[#FF0000]"
    }

    return (
        <div className='mt-2'>
            <button className={`${typeAlert[type]} text-white py-5 px-10 rounded-[16px] font-regular hover:bg-[#4B1979] transition`}>
                {msg}
            </button>
        </div>
    )
}

export default AlertAuth