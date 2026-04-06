import React from 'react'
import FeaturesCard from '../common/FeaturesCard'
const Features = () => {
    return (
  <section className='px-20 py-16'>
       {/*heading*/}

       <div>
         <h2 className='text-5xl font-bold text-center mb-10'><span className='text-blue-500 text-6xl'>O</span>ur Features</h2>

       </div>

         {/* content */}

         <div className='grid grid-cols-4 gap-4'>
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />

         </div>
        

  </section>
  )
}

export default Features