import React from 'react';

const AlertSuccess = ({msg}) => {

    return (
        <div className='mt-2'>
            <button className="bg-success text-white py-5 px-10 rounded-[16px] font-regular hover:bg-[#4B1979] transition">
                {msg}
            </button>
        </div>
    )
}

export default AlertSuccess