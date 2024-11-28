import React, { useState } from 'react'; 
import Switch from '../Switch/Switch';

const SubDataPemumpang = ({ title_card }) => {
    const [showNamaKeluarga, setShowNamaKeluarga] = useState(false);

    const handleSwitchChange = () => {
        setShowNamaKeluarga(!showNamaKeluarga);
    };

    return (
        <div className='border border-black p-5 rounded-md'>
            <h1 className='text-xl font-bold mb-4'>Isi Data Pemesan</h1>
            <div className='rounded-lg'>
                <div className="head-card p-4 rounded-t-lg bg-neutral-700 text-white">
                    <h1 className='text-base'>Data Diri Pemesan</h1>
                </div>
                <div className="body-card px-5">
                    <div className='flex flex-col my-4'>
                        <label className='font-semibold text-purple-800 mb-2 text-sm'>Nama Lengkap</label>
                        <input type="text" className='border-2 py-3 px-2 text-sm rounded-[4px]' />
                    </div>
                    <div className="flex justify-between">
                        <p>Punya Nama Keluarga?</p>
                        <Switch onChange={handleSwitchChange} />
                    </div>
                    {showNamaKeluarga && (
                        <div className='flex flex-col my-6'>
                            <label htmlFor="" className='font-semibold text-purple-800 mb-2 text-sm'>Nama Keluarga</label>
                            <input type="text" className='border-2 py-3 px-4 text-sm rounded-[4px] w-full' />
                        </div>
                    )}
                    <div className='flex flex-col my-4'>
                        <label className='font-semibold text-purple-800 mb-2 text-sm'>Nomor Telepon</label>
                        <input type="text" className='border-2 py-3 px-2 text-sm rounded-[4px]' />
                    </div>
                    <div className='flex flex-col my-4'>
                        <label className='font-semibold text-purple-800 mb-2 text-sm'>Email</label>
                        <input type="text" className='border-2 py-3 px-2 text-sm rounded-[4px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubDataPemumpang;
