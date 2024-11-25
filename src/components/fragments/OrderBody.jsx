import React from 'react';
import DataPemesan from '../OrderCards/DataPemesan';
import DataPenumpang from '../OrderCards/DataPenumpang';
import PesananKursi from '../OrderCards/PesananKursi';
import DetailPenerbangan from '../OrderCards/DetailPenerbangan';

const OrderBody = () => {

    return (
        <div className='mx-60 px-60 my-8'>
            <div className='flex'>
                <div className='left-section w-7/12 flex flex-col gap-10'>
                    <DataPemesan />
                    <DataPenumpang/>
                    <PesananKursi/>
                </div>
                <div className="right-section w-5/12">
                    <DetailPenerbangan/>
                </div>
            </div>
        </div>
    )
}

export default OrderBody