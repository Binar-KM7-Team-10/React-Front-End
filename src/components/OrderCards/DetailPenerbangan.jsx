import React from 'react';

const DetailPenerbangan = () => {

    return (
        <div className='p-5'>
            <h1 className='text-lg font-bold'>Detail Penerbangan</h1>
            <div className="flex justify-between">
                <p className='text-sm font-bold'>07.00</p>
                <p className='text-xs font-bold text-purple-400'>Keberangkatan</p>
            </div>
            <p className='text-sm'>3 Maret 2024</p>
            <p className='text-sm'>Soekarno Hatta - Terminal 1A Domestik</p>
            <hr className='my-3 border-black'/>
        </div>
    )
}

export default DetailPenerbangan