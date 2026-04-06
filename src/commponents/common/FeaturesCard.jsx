import { Angry } from 'lucide-react'
import React from 'react'

const FeaturesCard = ({feature}) => {
  return (
    <div className='border-2 border-gray-400 rounded-md p-6 bg-[#d5bbff5d]' >

      <div className='flex items-start gap-3 mb-4'>
      <feature.icon size={28} className='text-blue-500 '  />
      <h3 className='text-2xl font-medium mb-4' >{feature.title}</h3>
      </div>

      
      <p className='text-gray-600 mt-3' >{feature.description}</p>
      
    </div>
   
    
  )
}

export default FeaturesCard