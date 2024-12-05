import React from 'react';

const OrderBreadcrumb = ({text1, text2, text3, active}) => {

    return (
        <>
            <div className='flex gap-3 mb-5'>
                <p className={active == text1 ? "font-bold" : "" }>{text1}</p>
                &gt;
                <p className={active == text2 ? "font-bold" : "" }>{text2}</p>
                &gt;
                <p className={active == text3 ? "font-bold" : "" }>{text3}</p>
            </div>
        </>
    )
}

export default OrderBreadcrumb