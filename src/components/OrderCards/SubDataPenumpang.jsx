import React from 'react';
import Switch from '../Switch/Switch';

const SubDataPemumpang = ({ title_card }) => {

    return (
        <>
            <div className='rounded-lg mb-10'>
                <div className="head-card p-4 rounded-t-lg bg-neutral-700 text-white">
                    <h1 className='text-base'>{title_card}</h1>
                </div>
                <div className="body-card px-5">
                    <div className='flex flex-col my-4'>
                        <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Nama Lengkap</label>
                        <select className='border-2 py-3 px-2 text-sm'>
                            <option value="mr">Mr</option>
                            <option value="mr">Mrs</option>
                        </select>
                    </div>
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
                        <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Tanggal Lahir</label>
                        <input type="date" className='border-2 py-3 px-2 text-sm' />
                    </div>
                    <div className='flex flex-col my-4'>
                        <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Kewarganegaraan</label>
                        <input type="text" className='border-2 py-3 px-2 text-sm' />
                    </div>
                    <div className='flex flex-col my-4'>
                        <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Ktp/Paspor</label>
                        <input type="text" className='border-2 py-3 px-2 text-sm' />
                    </div>
                    <div className='flex flex-col my-4'>
                        <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Negara Penerbit</label>
                        <select className='border-2 py-3 px-2 text-sm'>
                            <option value=""></option>
                            <option value="Indonesia">Indonesia</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Berlaku Sampai</label>
                        <input type="date" className='border-2 py-3 px-2 text-sm' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubDataPemumpang