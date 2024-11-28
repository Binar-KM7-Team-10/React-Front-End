// import React from 'react';
// import DataPemesan from '../OrderCards/DataPemesan';
// import DataPenumpang from '../OrderCards/DataPenumpang';
// import PesananKursi from '../OrderCards/PesananKursi';
// import DetailPenerbangan from '../OrderCards/DetailPenerbangan';

// const OrderBody = () => {

//     return (
//         <div className='mdmy-8'>
//             <div className='flex'>
//                 <div className='left-section w-7/12 flex flex-col gap-10'>
//                     <DataPemesan />
//                     <DataPenumpang />
//                     <PesananKursi />
//                     <div className="flex justify-center">
//                         <button className="w-11/12 max-w-2xl bg-[#7126B5] text-white py-4 rounded-lg text-xl hover:opacity-90 transition-opacity shadow-md">
//                             Simpan
//                         </button>
//                     </div>
//                 </div>
//                 <div className="right-section w-5/12">
//                     <DetailPenerbangan />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default OrderBody

import React from 'react';
import DataPemesan from '../OrderCards/DataPemesan';
import DataPenumpang from '../OrderCards/DataPenumpang';
import PesananKursi from '../OrderCards/PesananKursi';
import DetailPenerbangan from '../OrderCards/DetailPenerbangan';

const OrderBody = () => {

    return (
        <div className='my-8'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg md:flex gap-6'>
                <div className='left-section w-full space-y-6 md:w-7/12 flex-col'>
                    <DataPemesan />
                    <DataPenumpang />
                    <PesananKursi />
                    <div className="flex justify-center">
                        <button className="w-11/12 max-w-2xl bg-[#7126B5] text-white py-4 rounded-lg text-xl hover:opacity-90 transition-opacity shadow-md">
                            Simpan
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-5/12 mt-8 md:mt-0">
                    <DetailPenerbangan />
                </div>
            </div>
        </div>
    );
};

export default OrderBody;
