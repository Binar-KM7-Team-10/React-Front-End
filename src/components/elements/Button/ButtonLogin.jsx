import React from 'react'

const ButtonLogin = ({msg}) => {
  return (
    <div className='mt-2'>
      <button className="bg-purple-600 w-full text-white py-3 rounded-[16px] font-semibold hover:bg-purple-800 transition">
        {msg}
      </button>
    </div>
  )
}

export default ButtonLogin
