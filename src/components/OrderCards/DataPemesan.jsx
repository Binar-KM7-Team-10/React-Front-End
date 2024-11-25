import React from 'react';
import Switch from '../Switch/Switch';

const DataPemesan = () => {

    return (
        <>
            <div className='border border-black p-5 rounded-md'>
                <h1 className='text-xl font-bold mb-4'>Isi Data Pemesan</h1>
                <div className='rounded-lg'>
                    <div className="head-card p-4 rounded-t-lg bg-neutral-700 text-white">
                        <h1 className='text-base'>Data Diri Pemesan</h1>
                    </div>
                    <div className="body-card px-5">
                        <div className='flex flex-col my-4'>
                            <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Nama Lengkap</label>
                            <input type="text" className='border-2 py-3 px-2 text-sm' />
                        </div>
                        <div className="flex justify-between">
                            <p>Punya Nama Keluarga ? </p>
                            <Switch />
                        </div>
                        <div className='flex flex-col my-4'>
                            <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Nama Keluarga</label>
                            <input type="text" className='border-2 py-3 px-2 text-sm' />
                        </div>
                        <div className='flex flex-col my-4'>
                            <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Nomor Telepon</label>
                            <input type="text" className='border-2 py-3 px-2 text-sm' />
                        </div>
                        <div className='flex flex-col my-4'>
                            <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Email</label>
                            <input type="text" className='border-2 py-3 px-2 text-sm' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataPemesan