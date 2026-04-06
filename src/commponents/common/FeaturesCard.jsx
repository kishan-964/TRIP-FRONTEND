import { Angry } from 'lucide-react'
import React from 'react'

const FeaturesCard = () => {
  return (
    
    <div className='border border-blue-600 rounded-md p-4'>
        <Angry size={40} className='mb-4 text-blue-600' />
        
        <h3 className='text-2xl font-medium mb-4'>24/7 Availabel</h3>
        <p className='text-gray-600'>We are available 24/7 to assist you with any questions or concerns.</p>
        
    </div>
    
  )
}

export default FeaturesCard