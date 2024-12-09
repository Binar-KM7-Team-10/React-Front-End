import React from 'react'

const ButtonLogin = ({msg}) => {
  return (
    <div className='mt-2'>
      <button className="bg-purple-700 w-full text-white py-3 rounded-[16px] font-semibold hover:bg-[#4B1979] transition">
        {msg}
      </button>
    </div>
  )
}

export default ButtonLogin
