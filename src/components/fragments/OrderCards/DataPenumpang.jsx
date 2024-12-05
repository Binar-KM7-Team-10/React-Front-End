import React from 'react';
import SubDataPemumpang from './SubDataPenumpang';
const DataPenumpang = () => {

    return (
        <>
            <div className='border border-black p-5 rounded-md'>
                <h1 className='text-xl font-bold mb-4'>Isi Data Penumpang </h1>
                <SubDataPemumpang title_card={"Data Diri Penumpang 1 - Adult"} />
                <SubDataPemumpang title_card={"Data Diri Penumpang 2 - Adult"} />
            </div>
        </>
    )
}

export default DataPenumpang