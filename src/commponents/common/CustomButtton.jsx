import React from 'react'

const CustomButtton = ({ text }) => {
  return (
    <button className='bg-blue-700 text-white px-8 py-2 rounded-md hover:bg-blue-700 shadow-2xl shadow-blue-500 cursor-pointer'>
      {text}
    </button>
  )
}

export default CustomButtton